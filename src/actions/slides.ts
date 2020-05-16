export const SLIDES_ADD = "SLIDES_ADD";
export interface SlidesAddAction {
  type: typeof SLIDES_ADD
}

export type SlidesActions =
  SlidesAddAction;

export const addSlide = (): SlidesAddAction => ({
  type: SLIDES_ADD,
});
