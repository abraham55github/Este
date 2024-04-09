import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return(
        <section className='app'>
        <TwitterFollowCard isFollowing userName="kikobeats">
            Miguel Angel Duran
        </TwitterFollowCard>
        <TwitterFollowCard isFollowing={false} userName="pheralb">
            Juanito Fosefo
        </TwitterFollowCard>
        
        </section>
    )
}