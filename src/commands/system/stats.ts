import 'moment-duration-format';

import SpectreEmbed from '@structures/SpectreEmbed';
import { CATEGORIES } from '@util/constants';
import { Command } from 'discord-akairo';
import { Message } from 'discord.js';
import { duration } from 'moment';

export default class StatCommands extends Command {
	public constructor() {
		super('stats', {
			aliases: ['stats', 'info'],
			category: CATEGORIES.SYSTEM,
			clientPermissions: ['EMBED_LINKS', 'SEND_MESSAGES'],
			description: {
				content: 'Spectre statistics!',
				examples: [''],
				usage: '',
			},
			ratelimit: 2,
		});
	}

	public exec(message: Message) {
		return message.util!.send(new SpectreEmbed()
			.setTitle('❯ Spectre Statistics')
			.setThumbnail(this.client.user!.displayAvatarURL())
			.addField('❯ Uptime', duration(this.client.uptime!).format('D [days] H [hours] m [mins] s [secs]'))
			.addField('❯ Memory Usage', `${(Math.round((process.memoryUsage().heapUsed / 1024 / 1024) * 10)) / 10} MB`)
			.addField('❯ General Statistics', `• Guilds: ${this.client.guilds.size}\n• Channels: ${this.client.channels.size}`)
			.addField('❯ Version', `v${this.client.version}`)
			.addField('❯ Library', '[discord.js](https://discord.js.org)[-akairo](https://discord-akairo.github.io \'akairo\')')
			.addField('❯ Github', 'Spectre is open-source! View it [here](https://github.com/Jo3-L/spectre).'));
	}
}