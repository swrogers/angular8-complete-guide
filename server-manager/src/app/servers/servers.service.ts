export class ServersService {
  private servers = [
    {id: 1, name: 'TestServer', status: 'online'},
    {id: 2, name: 'Another TestServer', status: 'offline'},
    {id: 3, name: 'Yet another server', status: 'unknown'},
  ];

  getServers(): { id: number; name: string; status: string; }[] {
    return this.servers;
  }

}
