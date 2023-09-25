export class Utils {

  public static windowsrc: Window = window;
  public static registerBroadcast(message: { event: string, name?: string, data?: any }) {
    this.windowsrc = window.opener ?? window;
    this.windowsrc.postMessage(JSON.stringify(message), '*');

    const onwinclose = (wind: Window | null, e?: Event) => {
      console.log('closed for', wind?.name, wind, e);
      this.windowsrc.postMessage(JSON.stringify({ event: "WindowClosed", name: wind?.name }), '*');
    }
    window.onunload = (e: Event) => onwinclose(window, e);
    window.onmessage = (e: MessageEvent) => {
      let data;
      try {
        data = JSON.parse(e.data);
        console.log('>>>>>>>>> onmessage', data);
      }
      catch (e) { return; }
      switch (data.event) {
        case "EditorStarted":
          console.log('>>>>>>>>> editorstarted', this.windowsrc);
          break;
        case "TargetSet":
          console.log('>>>>>>>>> targetset', this.windowsrc);
          break;
        case "SetTheme":
          console.log('>>>>>>>>> settheme', this.windowsrc);
          break;
        case "WindowClosed":
          break;
        case "QueryOpenWindows":
          break;
      }
      //(`[${window.name} caught]`, data.event);
    }
  }
  
  
  public static broadcast(payload:string, window:Window|null, target:string = '*')   {
    
  }
  
  
}