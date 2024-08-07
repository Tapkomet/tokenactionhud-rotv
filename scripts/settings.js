import { MODULE } from './constants.js'

export function register (updateFunc) {
    game.settings.register(MODULE.ID, 'abbreviateSkills', {
        name: game.i18n.localize(
            'tokenActionHud.rotv.settings.abbreviateSkills.name'
        ),
        hint: game.i18n.localize(
            'tokenActionHud.rotv.settings.abbreviateSkills.hint'
        ),
        scope: 'client',
        config: true,
        type: Boolean,
        default: false,
        onChange: (value) => {
            updateFunc(value)
        }
    })

    game.settings.register(MODULE.ID, 'showSlowActions', {
        name: game.i18n.localize(
            'tokenActionHud.rotv.settings.showSlowActions.name'
        ),
        hint: game.i18n.localize(
            'tokenActionHud.rotv.settings.showSlowActions.hint'
        ),
        scope: 'client',
        config: true,
        type: Boolean,
        default: true,
        onChange: (value) => {
            updateFunc(value)
        }
    })

    game.settings.register(MODULE.ID, 'displaySpellInfo', {
        name: game.i18n.localize(
            'tokenActionHud.rotv.settings.displaySpellInfo.name'
        ),
        hint: game.i18n.localize(
            'tokenActionHud.rotv.settings.displaySpellInfo.hint'
        ),
        scope: 'client',
        config: true,
        type: Boolean,
        default: true,
        onChange: (value) => {
            updateFunc(value)
        }
    })

    game.settings.register(MODULE.ID, 'showUnchargedItems', {
        name: game.i18n.localize(
            'tokenActionHud.rotv.settings.showUnchargedItems.name'
        ),
        hint: game.i18n.localize(
            'tokenActionHud.rotv.settings.showUnchargedItems.hint'
        ),
        scope: 'client',
        config: true,
        type: Boolean,
        default: false,
        onChange: (value) => {
            updateFunc(value)
        }
    })

    game.settings.register(MODULE.ID, 'showUnequippedItems', {
        name: game.i18n.localize(
            'tokenActionHud.rotv.settings.showUnequippedItems.name'
        ),
        hint: game.i18n.localize(
            'tokenActionHud.rotv.settings.showUnequippedItems.hint'
        ),
        scope: 'client',
        config: true,
        type: Boolean,
        default: false,
        onChange: (value) => {
            updateFunc(value)
        }
    })

    game.settings.register(MODULE.ID, 'showUnequippedItemsNpcs', {
        name: game.i18n.localize(
            'tokenActionHud.rotv.settings.showUnequippedItemsNpcs.name'
        ),
        hint: game.i18n.localize(
            'tokenActionHud.rotv.settings.showUnequippedItemsNpcs.hint'
        ),
        scope: 'client',
        config: true,
        type: Boolean,
        default: true,
        onChange: (value) => {
            updateFunc(value)
        }
    })

    game.settings.register(MODULE.ID, 'showUnpreparedSpells', {
        name: game.i18n.localize(
            'tokenActionHud.rotv.settings.showUnpreparedSpells.name'
        ),
        hint: game.i18n.localize(
            'tokenActionHud.rotv.settings.showUnpreparedSpells.hint'
        ),
        scope: 'client',
        config: true,
        type: Boolean,
        default: false,
        onChange: (value) => {
            updateFunc(value)
        }
    })

    game.settings.register(MODULE.ID, 'showItemsWithoutActivationCosts', {
        name: game.i18n.localize(
            'tokenActionHud.rotv.settings.showItemsWithoutActivationCosts.name'
        ),
        hint: game.i18n.localize(
            'tokenActionHud.rotv.settings.showItemsWithoutActivationCosts.hint'
        ),
        scope: 'client',
        config: true,
        type: Boolean,
        default: false,
        onChange: (value) => {
            updateFunc(value)
        }
    })
}
