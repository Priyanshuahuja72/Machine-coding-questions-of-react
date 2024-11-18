import React, { useState } from 'react'
const Folder = ({explorerData, handleInsertNode}) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false
  })
const handleNewFolder = (e, isFolder) => {
  e.stopPropagation();
  setShowInput({
    visible: true,
    isFolder
  })
}
const onAddFolder = (e) => {
     if(e.keyCode === 13 && e.target.value){
      handleInsertNode(explorerData.id, e.target.value, showInput.isFolder);

      setShowInput({...showInput, visible: false})
     }
}

  if(explorerData.isFolder){
    return (
      <div>
        <div className="folder" onClick={() => setExpand(!expand)} style={{cursor: 'pointer', marginTop: "5px", paddingLeft: "10px"}}>
          <span>📁 {explorerData.name}</span>
          <div className='folder-btn'>
          <button onClick={(e) => handleNewFolder(e, true)}>+Folder</button>
          <button onClick={(e) => handleNewFolder(e, false)}>-File</button>
          </div>
        </div>
        <div className="explorer__items" style={{display: expand ? "block": "none", paddingLeft: "20px"}}>
          <div className='inputContainer'>
            <span>{showInput.isFolder ? "📁" : "📄"}</span>
            <input
              type="text"
              className="inputContainer__input"
              autoFocus
              onKeyDown={onAddFolder}
              onBlur={() => setShowInput({ ...showInput, visible: false })}
              />
          </div>
          {explorerData.items.map((exp) => (
             <Folder
                key={exp.id}
                explorerData={exp}
                handleInsertNode={handleInsertNode}
             />
          ))}
        </div>
      </div>
    )
  }else {
    return (
      <div className='file'>📄{explorerData.name}</div>
    )
  }
}

export default Folder