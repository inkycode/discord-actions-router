import { Router } from '../Router'
import { RouterImpl } from './RouterImpl'

import { Client } from 'discord.js'

export function createRouter(client: Client, prefix: string): Router {
    return new RouterImpl(client, prefix)
}