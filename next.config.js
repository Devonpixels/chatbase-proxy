const agentId = "3PPLCYC1kgc-0rlmpZ13y";

module.exports = {
  async rewrites() {
    return [
      {
        source: '/help',
        destination: `https://www.chatbase.co/${agentId}/help`,
      },
      {
        source: '/help/:path*',
        destination: `https://www.chatbase.co/${agentId}/help/:path*`,
      },
      {
        source: '/__cb/:path*',
        destination: `https://www.chatbase.co/__cb/:path*`,
      },
      {
        source: `/api/chat/${agentId}/:path*`,
        destination: `https://www.chatbase.co/api/chat/${agentId}/:path*`,
      }
    ]
  }
}
