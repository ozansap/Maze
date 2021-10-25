import { useState } from "react";

export default function Settings({ settings, setSettings, settingsMenu, setSettingsMenu, newMaze, anim_restart }) {
		const [newSettings, setNewSettings] = useState(settings);
	
	const settingsMenu_close = () => {
		setSettingsMenu(false);

		const width = Math.max(Math.floor(newSettings.width), 1);
		const height = Math.max(Math.floor(newSettings.height), 1);
		const speed = Math.max(Math.floor(newSettings.speed), 1);

		if (width !== settings.width || height !== settings.height) {
			newMaze({ width, height });
		}

		if (speed !== settings.speed) {
			anim_restart({ speed });
		}

		setSettings({ width, height, speed });
		setNewSettings({ width, height, speed });
	}

	return (
		<div className="settingsWindow" style={{display: settingsMenu ? "flex" : "none"}}>
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
						value={newSettings.width}
						onChange={(e) => { setNewSettings({...newSettings, width: parseInt(e.target.value) || ''}) }}
					></input>
				</div>
				<div className="settingsWindow-main-setting_container">
					<label>Height</label>
					<input
						type="number"
						placeholder={settings.height}
						value={newSettings.height}
						onChange={(e) => { setNewSettings({...newSettings, height: parseInt(e.target.value) || ''}) }}
					></input>
				</div>
				<div className="settingsWindow-main-setting_container">
					<label>Animation Speed</label>
					<input
						type="number"
						placeholder={settings.speed}
						value={newSettings.speed}
						onChange={(e) => { setNewSettings({...newSettings, speed: parseInt(e.target.value) || ''}) }}
					></input>
				</div>
			</div>
		</div>
	)
}