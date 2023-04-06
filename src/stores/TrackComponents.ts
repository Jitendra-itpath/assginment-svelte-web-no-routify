import { writable } from 'svelte/store';
import { navigationComponent } from '../enums/navigationEnum';
export const track = writable(navigationComponent.Home);
