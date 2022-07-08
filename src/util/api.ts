export function getMessages(channelId: string) {
    return fetch('https://discord.com/api/v9/channels/' + channelId + '/messages?limit=20', {
        method: 'GET',
        headers: {
            authorization: 'NTgxNjgyNjExMTk0MTY3MzA2.GloLcI.aAenDAPDCZ27KrAtH0jJLipYuy2YFUZUsfhoNQ',
        },
    }).then(res => res.json())
}
