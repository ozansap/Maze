export default function Settings({ settings, setSettings, settingsMenu, setSettingsMenu }) {
	
	const settingsMenu_close = () => {
		setSettingsMenu(false);
	}
	
	const changeWidth = (e) => {

	}

	const changeHeight = (e) => {

	}

	const changeSpeed = (e) => {

	}

	return (
		<div className="settingsWindow" style={{display: "none"}}>
			<div
				className="settingsWindow-bg"
				onClick={settingsMenu_close}
			></div>
			<div className="settingsWindow-main">
				<div className="settingsWindow-main-setting_container">
					<label>Width</label>
					<input
						type="number"
						placeholder={settings.width}
						onChange={changeWidth}
					></input>
				</div>
				<div className="settingsWindow-main-setting_container">
					<label>Height</label>
					<input
						type="number"
						placeholder={settings.height}
						onChange={changeHeight}
					></input>
				</div>
				<div className="settingsWindow-main-setting_container">
					<label>Animation Speed</label>
					<input
						type="number"
						placeholder={settings.speed}
						onChange={changeSpeed}
					></input>
				</div>
			</div>
		</div>
	)
}