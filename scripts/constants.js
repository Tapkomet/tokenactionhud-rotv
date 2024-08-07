/**
 * Module-based constants
 */
export const MODULE = {
    ID: 'token-action-hud-rotv'
}

/**
 * Core module
 */
export const CORE_MODULE = {
    ID: 'token-action-hud-core'
}

/**
 * Core module version required by the system module
 */
export const REQUIRED_CORE_MODULE_VERSION = '1.5'

/**
 * Action type
 */
export const ACTION_TYPE = {
    ability: 'ROTV.Ability',
    check: 'tokenActionHud.rotv.check',
    condition: 'tokenActionHud.rotv.condition',
    counter: 'tokenActionHud.rotv.counter',
    effect: 'ROTV.Effect',
    exhaustion: 'ROTV.Exhaustion',
    feature: 'ITEM.TypeFeat',
    item: 'tokenActionHud.rotv.item',
    save: 'ROTV.ActionSave',
    skill: 'tokenActionHud.rotv.skill',
    spell: 'ITEM.TypeSpell',
    utility: 'ROTV.ActionUtil'
}

/**
 * Activation type icons
 */
export const ACTIVATION_TYPE_ICON = {
    bonus: 'fas fa-plus',
    crew: 'fas fa-users',
    day: 'fas fa-hourglass-end',
    hour: 'fas fa-hourglass-half',
    lair: 'fas fa-home',
    minute: 'fas fa-hourglass-start',
    legendary: 'fas fas fa-dragon',
    reaction: 'fas fa-bolt',
    special: 'fas fa-star'
}

/**
 * Concentration icon
 */
export const CONCENTRATION_ICON = 'systems/rotv/icons/svg/statuses/concentrating.svg'

/**
 * Conditions
 */
export const CONDITION = {
    blind: { uuid: 'Compendium.rotv.rules.JournalEntry.w7eitkpD7QQTB6j0.JournalEntryPage.0b8N4FymGGfbZGpJ' },
    blinded: { uuid: 'Compendium.rotv.rules.JournalEntry.w7eitkpD7QQTB6j0.JournalEntryPage.0b8N4FymGGfbZGpJ' },
    'Convenient Effect: Blinded': { uuid: 'Compendium.rotv.rules.JournalEntry.w7eitkpD7QQTB6j0.JournalEntryPage.0b8N4FymGGfbZGpJ' },
    charmed: { uuid: 'Compendium.rotv.rules.JournalEntry.w7eitkpD7QQTB6j0.JournalEntryPage.zZaEBrKkr66OWJvD' },
    'Convenient Effect: Charmed': { uuid: 'Compendium.rotv.rules.JournalEntry.w7eitkpD7QQTB6j0.JournalEntryPage.zZaEBrKkr66OWJvD' },
    deaf: { uuid: 'Compendium.rotv.rules.JournalEntry.w7eitkpD7QQTB6j0.JournalEntryPage.6G8JSjhn701cBITY' },
    deafened: { uuid: 'Compendium.rotv.rules.JournalEntry.w7eitkpD7QQTB6j0.JournalEntryPage.6G8JSjhn701cBITY' },
    'Convenient Effect: Deafened': { uuid: 'Compendium.rotv.rules.JournalEntry.w7eitkpD7QQTB6j0.JournalEntryPage.6G8JSjhn701cBITY' },
    fear: { uuid: 'Compendium.rotv.rules.JournalEntry.w7eitkpD7QQTB6j0.JournalEntryPage.oreoyaFKnvZCrgij' },
    'Convenient Effect: Frightened': { uuid: 'Compendium.rotv.rules.JournalEntry.w7eitkpD7QQTB6j0.JournalEntryPage.oreoyaFKnvZCrgij' },
    frightened: { uuid: 'Compendium.rotv.rules.JournalEntry.w7eitkpD7QQTB6j0.JournalEntryPage.oreoyaFKnvZCrgij' },
    grappled: { uuid: 'Compendium.rotv.rules.JournalEntry.w7eitkpD7QQTB6j0.JournalEntryPage.gYDAhd02ryUmtwZn' },
    'Convenient Effect: Grappled': { uuid: 'Compendium.rotv.rules.JournalEntry.w7eitkpD7QQTB6j0.JournalEntryPage.gYDAhd02ryUmtwZn' },
    incapacitated: { uuid: 'Compendium.rotv.rules.JournalEntry.w7eitkpD7QQTB6j0.JournalEntryPage.TpkZgLfxCmSndmpb' },
    'Convenient Effect: Incapacitated': { uuid: 'Compendium.rotv.rules.JournalEntry.w7eitkpD7QQTB6j0.JournalEntryPage.TpkZgLfxCmSndmpb' },
    invisible: { uuid: 'Compendium.rotv.rules.JournalEntry.w7eitkpD7QQTB6j0.JournalEntryPage.3UU5GCTVeRDbZy9u' },
    'Convenient Effect: Invisible': { uuid: 'Compendium.rotv.rules.JournalEntry.w7eitkpD7QQTB6j0.JournalEntryPage.3UU5GCTVeRDbZy9u' },
    paralysis: { uuid: 'Compendium.rotv.rules.JournalEntry.w7eitkpD7QQTB6j0.JournalEntryPage.xnSV5hLJIMaTABXP' },
    paralyzed: { uuid: 'Compendium.rotv.rules.JournalEntry.w7eitkpD7QQTB6j0.JournalEntryPage.xnSV5hLJIMaTABXP' },
    'Convenient Effect: Paralyzed': { uuid: 'Compendium.rotv.rules.JournalEntry.w7eitkpD7QQTB6j0.JournalEntryPage.xnSV5hLJIMaTABXP' },
    petrified: { uuid: 'Compendium.rotv.rules.JournalEntry.w7eitkpD7QQTB6j0.JournalEntryPage.xaNDaW6NwQTgHSmi' },
    'Convenient Effect: Petrified': { uuid: 'Compendium.rotv.rules.JournalEntry.w7eitkpD7QQTB6j0.JournalEntryPage.xaNDaW6NwQTgHSmi' },
    poison: { uuid: 'Compendium.rotv.rules.JournalEntry.w7eitkpD7QQTB6j0.JournalEntryPage.lq3TRI6ZlED8ABMx' },
    poisoned: { uuid: 'Compendium.rotv.rules.JournalEntry.w7eitkpD7QQTB6j0.JournalEntryPage.lq3TRI6ZlED8ABMx' },
    'Convenient Effect: Poisoned': { uuid: 'Compendium.rotv.rules.JournalEntry.w7eitkpD7QQTB6j0.JournalEntryPage.lq3TRI6ZlED8ABMx' },
    prone: { uuid: 'Compendium.rotv.rules.JournalEntry.w7eitkpD7QQTB6j0.JournalEntryPage.y0TkcdyoZlOTmAFT' },
    'Convenient Effect: Prone': { uuid: 'Compendium.rotv.rules.JournalEntry.w7eitkpD7QQTB6j0.JournalEntryPage.y0TkcdyoZlOTmAFT' },
    restrain: { uuid: 'Compendium.rotv.rules.JournalEntry.w7eitkpD7QQTB6j0.JournalEntryPage.cSVcyZyNe2iG1fIc' },
    restrained: { uuid: 'Compendium.rotv.rules.JournalEntry.w7eitkpD7QQTB6j0.JournalEntryPage.cSVcyZyNe2iG1fIc' },
    'Convenient Effect: Restrained': { uuid: 'Compendium.rotv.rules.JournalEntry.w7eitkpD7QQTB6j0.JournalEntryPage.cSVcyZyNe2iG1fIc' },
    stun: { uuid: 'Compendium.rotv.rules.JournalEntry.w7eitkpD7QQTB6j0.JournalEntryPage.ZyZMUwA2rboh4ObS' },
    stunned: { uuid: 'Compendium.rotv.rules.JournalEntry.w7eitkpD7QQTB6j0.JournalEntryPage.ZyZMUwA2rboh4ObS' },
    'Convenient Effect: Stunned': { uuid: 'Compendium.rotv.rules.JournalEntry.w7eitkpD7QQTB6j0.JournalEntryPage.ZyZMUwA2rboh4ObS' },
    unconscious: { uuid: 'Compendium.rotv.rules.JournalEntry.w7eitkpD7QQTB6j0.JournalEntryPage.UWw13ISmMxDzmwbd' },
    'Convenient Effect: Unconscious': { uuid: 'Compendium.rotv.rules.JournalEntry.w7eitkpD7QQTB6j0.JournalEntryPage.UWw13ISmMxDzmwbd' },
    exhaustion: { uuid: 'Compendium.rotv.rules.JournalEntry.w7eitkpD7QQTB6j0.JournalEntryPage.cspWveykstnu3Zcv' },
    'Convenient Effect: Exhaustion 1': { uuid: 'Compendium.rotv.rules.JournalEntry.w7eitkpD7QQTB6j0.JournalEntryPage.cspWveykstnu3Zcv' },
    'Convenient Effect: Exhaustion 2': { uuid: 'Compendium.rotv.rules.JournalEntry.w7eitkpD7QQTB6j0.JournalEntryPage.cspWveykstnu3Zcv' },
    'Convenient Effect: Exhaustion 3': { uuid: 'Compendium.rotv.rules.JournalEntry.w7eitkpD7QQTB6j0.JournalEntryPage.cspWveykstnu3Zcv' },
    'Convenient Effect: Exhaustion 4': { uuid: 'Compendium.rotv.rules.JournalEntry.w7eitkpD7QQTB6j0.JournalEntryPage.cspWveykstnu3Zcv' },
    'Convenient Effect: Exhaustion 5': { uuid: 'Compendium.rotv.rules.JournalEntry.w7eitkpD7QQTB6j0.JournalEntryPage.cspWveykstnu3Zcv' }
}

/**
 * Groups
 */
export const GROUP = {
    _1stLevelSpells: { id: '1st-level-spells', name: 'tokenActionHud.rotv.1stLevelSpells', type: 'system' },
    _2ndLevelSpells: { id: '2nd-level-spells', name: 'tokenActionHud.rotv.2ndLevelSpells', type: 'system' },
    _3rdLevelSpells: { id: '3rd-level-spells', name: 'tokenActionHud.rotv.3rdLevelSpells', type: 'system' },
    _4thLevelSpells: { id: '4th-level-spells', name: 'tokenActionHud.rotv.4thLevelSpells', type: 'system' },
    _5thLevelSpells: { id: '5th-level-spells', name: 'tokenActionHud.rotv.5thLevelSpells', type: 'system' },
    _6thLevelSpells: { id: '6th-level-spells', name: 'tokenActionHud.rotv.6thLevelSpells', type: 'system' },
    _7thLevelSpells: { id: '7th-level-spells', name: 'tokenActionHud.rotv.7thLevelSpells', type: 'system' },
    _8thLevelSpells: { id: '8th-level-spells', name: 'tokenActionHud.rotv.8thLevelSpells', type: 'system' },
    _9thLevelSpells: { id: '9th-level-spells', name: 'tokenActionHud.rotv.9thLevelSpells', type: 'system' },
    abilities: { id: 'abilities', name: 'tokenActionHud.rotv.abilities', type: 'system' },
    actions: { id: 'actions', name: 'ROTV.ActionPl', type: 'system' },
    activeFeatures: { id: 'active-features', name: 'tokenActionHud.rotv.activeFeatures', type: 'system' },
    artificerInfusions: { id: 'artificer-infusions', name: 'tokenActionHud.rotv.artificerInfusions', type: 'system' },
    atWillSpells: { id: 'at-will-spells', name: 'tokenActionHud.rotv.atWillSpells', type: 'system' },
    backgroundFeatures: { id: 'background-features', name: 'tokenActionHud.rotv.backgroundFeatures', type: 'system' },
    bonusActions: { id: 'bonus-actions', name: 'tokenActionHud.rotv.bonusActions', type: 'system' },
    cantrips: { id: 'cantrips', name: 'tokenActionHud.rotv.cantrips', type: 'system' },
    channelDivinity: { id: 'channel-divinity', name: 'tokenActionHud.rotv.channelDivinity', type: 'system' },
    checks: { id: 'checks', name: 'tokenActionHud.rotv.checks', type: 'system' },
    classFeatures: { id: 'class-features', name: 'tokenActionHud.rotv.classFeatures', type: 'system' },
    combat: { id: 'combat', name: 'tokenActionHud.combat', type: 'system' },
    conditions: { id: 'conditions', name: 'tokenActionHud.rotv.conditions', type: 'system' },
    consumables: { id: 'consumables', name: 'ITEM.TypeConsumablePl', type: 'system' },
    containers: { id: 'containers', name: 'ITEM.TypeContainerPl', type: 'system' },
    counters: { id: 'counters', name: 'tokenActionHud.rotv.counters', type: 'system' },
    crewActions: { id: 'crew-actions', name: 'tokenActionHud.rotv.crewActions', type: 'system' },
    defensiveTactics: { id: 'defensive-tactics', name: 'tokenActionHud.rotv.defensiveTactics', type: 'system' },
    eldritchInvocations: { id: 'eldritch-invocations', name: 'tokenActionHud.rotv.eldritchInvocations', type: 'system' },
    elementalDisciplines: { id: 'elemental-disciplines', name: 'tokenActionHud.rotv.elementalDisciplines', type: 'system' },
    equipment: { id: 'equipment', name: 'ITEM.TypeEquipmentPl', type: 'system' },
    equipped: { id: 'equipped', name: 'ROTV.Equipped', type: 'system' },
    exhaustion: { id: 'exhaustion', name: 'ROTV.Exhaustion', type: 'system' },
    feats: { id: 'feats', name: 'tokenActionHud.rotv.feats', type: 'system' },
    fightingStyles: { id: 'fighting-styles', name: 'tokenActionHud.rotv.fightingStyles', type: 'system' },
    huntersPrey: { id: 'hunters-prey', name: 'tokenActionHud.rotv.huntersPrey', type: 'system' },
    innateSpells: { id: 'innate-spells', name: 'tokenActionHud.rotv.innateSpells', type: 'system' },
    kiAbilities: { id: 'ki-abilities', name: 'tokenActionHud.rotv.kiAbilities', type: 'system' },
    lairActions: { id: 'lair-actions', name: 'tokenActionHud.rotv.lairActions', type: 'system' },
    legendaryActions: { id: 'legendary-actions', name: 'tokenActionHud.rotv.legendaryActions', type: 'system' },
    loot: { id: 'loot', name: 'ITEM.TypeLootPl', type: 'system' },
    maneuvers: { id: 'maneuvers', name: 'tokenActionHud.rotv.maneuvers', type: 'system' },
    metamagicOptions: { id: 'metamagic-options', name: 'tokenActionHud.rotv.metamagicOptions', type: 'system' },
    monsterFeatures: { id: 'monster-features', name: 'tokenActionHud.rotv.monsterFeatures', type: 'system' },
    multiattacks: { id: 'multiattacks', name: 'tokenActionHud.rotv.multiattacks', type: 'system' },
    otherActions: { id: 'other-actions', name: 'tokenActionHud.rotv.otherActions', type: 'system' },
    pactBoons: { id: 'pact-boons', name: 'tokenActionHud.rotv.pactBoons', type: 'system' },
    pactSpells: { id: 'pact-spells', name: 'tokenActionHud.rotv.pactSpells', type: 'system' },
    passiveEffects: { id: 'passive-effects', name: 'ROTV.EffectPassive', type: 'system' },
    passiveFeatures: { id: 'passive-features', name: 'tokenActionHud.rotv.passiveFeatures', type: 'system' },
    psionicPowers: { id: 'psionic-powers', name: 'tokenActionHud.rotv.psionicPowers', type: 'system' },
    raceFeatures: { id: 'race-features', name: 'tokenActionHud.rotv.raceFeatures', type: 'system' },
    reactions: { id: 'reactions', name: 'ROTV.ReactionPl', type: 'system' },
    rests: { id: 'rests', name: 'tokenActionHud.rotv.rests', type: 'system' },
    runes: { id: 'runes', name: 'tokenActionHud.rotv.runes', type: 'system' },
    saves: { id: 'saves', name: 'ROTV.ClassSaves', type: 'system' },
    skills: { id: 'skills', name: 'tokenActionHud.rotv.skills', type: 'system' },
    superiorHuntersDefense: { id: 'superior-hunters-defense', name: 'tokenActionHud.rotv.superiorHuntersDefense', type: 'system' },
    temporaryEffects: { id: 'temporary-effects', name: 'ROTV.EffectTemporary', type: 'system' },
    token: { id: 'token', name: 'tokenActionHud.token', type: 'system' },
    tools: { id: 'tools', name: 'ITEM.TypeToolPl', type: 'system' },
    unequipped: { id: 'unequipped', name: 'ROTV.Unequipped', type: 'system' },
    utility: { id: 'utility', name: 'tokenActionHud.utility', type: 'system' },
    weapons: { id: 'weapons', name: 'ITEM.TypeWeaponPl', type: 'system' }
}

/**
 * Prepared icon
 */
export const PREPARED_ICON = 'fas fa-sun'

/**
 * Proficiency level icons
 */
export const PROFICIENCY_LEVEL_ICON = {
    0.5: 'fas fa-adjust',
    1: 'fas fa-check',
    2: 'fas fa-check-double'
}

/**
 * Rarity
 */
export const RARITY = {
    common: 'tokenActionHud.rotv.common',
    uncommon: 'tokenActionHud.rotv.uncommon',
    rare: 'tokenActionHud.rotv.rare',
    veryRare: 'tokenActionHud.rotv.veryRare',
    legendary: 'tokenActionHud.rotv.legendary',
    artifact: 'tokenActionHud.rotv.artifact'
}

/**
 * Ritual icon
 */
export const RITUAL_ICON = 'fas fa-circle-r'

/**
 * Weapon properties
 */
export const WEAPON_PROPERTY = {
    ada: 'ROTV.WeaponPropertiesAda',
    amm: 'ROTV.WeaponPropertiesAmm',
    fin: 'ROTV.WeaponPropertiesFin',
    fir: 'ROTV.WeaponPropertiesFir',
    foc: 'ROTV.WeaponPropertiesFoc',
    hvy: 'ROTV.WeaponPropertiesHvy',
    lgt: 'ROTV.WeaponPropertiesLgt',
    lod: 'ROTV.WeaponPropertiesLod',
    mgc: 'ROTV.WeaponPropertiesMgc',
    rch: 'ROTV.WeaponPropertiesRch',
    rel: 'ROTV.WeaponPropertiesRel',
    ret: 'ROTV.WeaponPropertiesRet',
    sil: 'ROTV.WeaponPropertiesSil',
    spc: 'ROTV.WeaponPropertiesSpc',
    thr: 'ROTV.WeaponPropertiesThr',
    two: 'ROTV.WeaponPropertiesTwo',
    ver: 'ROTV.WeaponPropertiesVer'
}
