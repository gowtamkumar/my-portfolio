declare module "html2pdf.js" {
  const html2pdf: {
    (): {
      from: (el: HTMLElement) => {
        set: (options: Record<string, unknown>) => {
          save: () => void | Promise<void>;
        };
      };
    };
    default: typeof html2pdf;
  };
  export default html2pdf;
}
