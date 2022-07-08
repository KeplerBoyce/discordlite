export function getMessages(channelId: string) {
    return fetch('https://discord.com/api/v9/channels/' + channelId + '/messages?limit=20', {
        method: 'GET',
        headers: {
            authorization: '' + process.env.REACT_APP_DISCORD_AUTH,
        },
    }).then(res => res.json())
}
