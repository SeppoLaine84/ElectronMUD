# File formats
Files are in JSON


**Weapon file example*
```
{
	type:  ItemType.WEAPON,
	name: "item name",		
	shortName: "Sword",
	aliases: ["sword", "weapon"],
	description: "This is just a basic sword. Nothing fancy.",
	
	stats: { 
		damageType: DamageType.SWORD,
		damage: 1000,
		durability: 124,
		criticalDamageMultiplier: 3,
		size: 15
		material: [Material.IRON],	 // Make array, if some weapon is made of multiple materials
		specials: [],
	},
	actions: [] // Extra actions, some

}

```

 **Armour file example**
```
{
	type:  ItemType.ARMOUR,
	name: "rusty armour",		
	shortName: "Armour",
	aliases: ["rusty armour", "armour"],
	description: "Old rusty armour.",

	stats: {
		slot: [ CharacterEquipmentSlot.TORSO ] // Make array, if some armour takes more slots
		armour: 50,
		specials: []
	}	
}
```



