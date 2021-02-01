export interface IProject{
  image: string;
  title: string;
  description: string;
  viewLink: string;
  overlay: any;
  sourceCodeLink: string | null;
}


export interface ISocialIcon {
  link: string;
  arialLabel: string;
  isDark: boolean;
  strokeWidth:number;
  pathLine: string;
  viewBox:string;
}
