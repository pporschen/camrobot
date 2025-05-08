export type Preset = {
	name: string;
	coordinates: { x: number; y: number; z: number };
};

const PRESETS_KEY = "presets";

/**
 * Get all presets from local storage.
 * @returns {Preset[]} An array of presets.
 */
export const getPresets = (): Preset[] => {
	const presets = localStorage.getItem(PRESETS_KEY);
	return presets ? JSON.parse(presets) : [];
};

/**
 * Save a new preset to local storage.
 * @param {Preset} preset The preset to save.
 */
export const savePreset = (preset: Preset): void => {
	const presets = getPresets();
	presets.push(preset);
	localStorage.setItem(PRESETS_KEY, JSON.stringify(presets));
};

/**
 * Delete a preset by name.
 * @param {string} name The name of the preset to delete.
 */
export const deletePreset = (name: string): void => {
	const presets = getPresets();
	const updatedPresets = presets.filter((preset) => preset.name !== name);
	localStorage.setItem(PRESETS_KEY, JSON.stringify(updatedPresets));
};
