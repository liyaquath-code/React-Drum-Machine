import './Controls.css'

export const Controls = ({ isPowerOn, onClick, display, sound, updateSound }) => {
    return (
      <div className="control">
        <div className='power' title='Press space bar to toggle Power'>
          <strong style={{ marginRight: '8px', fontSize: '20px' }}>Power</strong>
          <label className="switch">
            <input type="checkbox" checked={isPowerOn} onClick={onClick} />
            <span className="slider round"></span>
          </label>
        </div>
        <p id='display'>{display}</p>
        <div className="rangeSlidecontainer">
          <input type='range' min="0" max="100" value={sound} onChange={updateSound} className="rangeSlider" id="myRange" />
        </div>
      </div>
    );
  };