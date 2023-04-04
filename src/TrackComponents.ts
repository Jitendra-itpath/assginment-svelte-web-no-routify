import { writable } from 'svelte/store';
import Home from './components/Home.svelte';
export const track = writable(Home);