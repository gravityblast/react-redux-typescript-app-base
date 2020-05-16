export const LAYOUT_TOGGLE_SLIDES_PANEL = "LAYOUT_TOGGLE_SLIDES_PANEL";
export interface LayoutToggleSlidesPanelAction {
  type: typeof LAYOUT_TOGGLE_SLIDES_PANEL
  open: boolean
}

export type LayoutActions =
  LayoutToggleSlidesPanelAction;

export const toggleSlidesPanel = (open: boolean): LayoutToggleSlidesPanelAction => ({
  type: LAYOUT_TOGGLE_SLIDES_PANEL,
  open,
});
