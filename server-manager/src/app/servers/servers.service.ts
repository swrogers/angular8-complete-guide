export class ServersService {
  private servers = [
    {id: 1, name: 'TestServer', status: 'online'},
    {id: 2, name: 'Another TestServer', status: 'offline'},
    {id: 3, name: 'Yet another server', status: 'unknown'},
  ];

  getServers(): { id: number; name: string; status: string; }[] {
    return this.servers;
  }

  getServer(id: number) {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    return server;
  }

  updateServer(id: number, serverInfo: {name: string, status: string}) {
    const server = this.getServer(id);
    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }

}
