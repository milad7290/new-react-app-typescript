export class Location {
  static getHost() {
    return { host: document.location.host };
  }

  static getPathName() {
    return { pathName: document.location.pathname };
  }

  static getProtocol() {
    return { protocol: document.location.protocol };
  }

  static getBaseUrl() {
    const { protocol } = Location.getProtocol();
    const { host } = Location.getHost();

    return { baseUrl: `${protocol}//${host}` };
  }

  static reload() {
    document.location.reload();
  }
}
