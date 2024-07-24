import { PokemonTypeInfoType } from "@/types/pokemon.types";
import { getAllTypesData } from "../pokemon.service";

export const damageReceivedCalculatorByType = async (typesDamages: PokemonTypeInfoType[]) => {

  const allTypes = await getAllTypesData();

  const types: Record<string, { [key: string]: number }> = {
    type0: {},
    type1: {}
  };


  for (let i = 0; i < typesDamages.length; i++) {

    typesDamages[i].damage_relations.double_damage_from.forEach((typeItem: { name: string }) => {
      types['type' + i][typeItem.name] = 2;
    });
    typesDamages[i].damage_relations.half_damage_from.forEach((typeItem: { name: string }) => {
      types['type' + i][typeItem.name] = 0.5;
    });
    typesDamages[i].damage_relations.no_damage_from.forEach((typeItem: { name: string }) => {
      types['type' + i][typeItem.name] = 0;
    });
    for (const type of allTypes) {
      if (!Object.keys(types['type' + i]).includes(type.name)) {
        types['type' + i][type.name] = 1;
      }
    }
  }

  if (typesDamages.length === 1) {
    return types.type0;
  }
  
  if (typesDamages.length === 2) {
    const typeForReturn: { [key: string]: number } = {};
    for (const type of allTypes) {
      const damage0 = types.type0[type.name];
      const damage1 = types.type1[type.name];
      //DAMAGE 0 CASE
      if (damage0 === 0 || damage1 === 0) {
        typeForReturn[type.name] = 0;
      }
      //DAMAGE 2 CASE
      if ((damage0 === 2 && damage1 === 1) || (damage0 === 1 && damage1 === 2)) {
        typeForReturn[type.name] = 2;
      }
      //DAMAGE 4 CASE
      if (damage0 === 2 && damage1 === 2) {
        typeForReturn[type.name] = 4;
      }
      //DAMAGE 1 CASE
      if (damage0 === 1 || damage1 === 1) {
        typeForReturn[type.name] = 1;
      }
      if ((damage0 === 2 && damage1 === 0.5) || (damage0 === 0.5 && damage1 === 2)) {
        typeForReturn[type.name] = 1;
      }
      //DAMAGE 0.5 CASE
      if ((damage0 === 0.5 && damage1 === 1) || (damage0 === 1 && damage1 === 0.5)) {
        typeForReturn[type.name] = 0.5;
      }
      //DAMAGE 0.25 CASE
      if (damage0 === 0.5 && damage1 === 0.5) {
        typeForReturn[type.name] = 0.25;
      }
    }
    return typeForReturn;
  }

}