/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelRACSensorsFilterInput = {
  CO2?: ModelFloatInput | null,
  MAC?: ModelIntInput | null,
  O2?: ModelFloatInput | null,
  atm_temperature?: ModelFloatInput | null,
  conductivity?: ModelFloatInput | null,
  humidity?: ModelFloatInput | null,
  pH?: ModelFloatInput | null,
  temperature?: ModelFloatInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelRACSensorsFilterInput | null > | null,
  or?: Array< ModelRACSensorsFilterInput | null > | null,
  not?: ModelRACSensorsFilterInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelRACSensorsConnection = {
  __typename: "ModelRACSensorsConnection",
  items:  Array<RACSensors | null >,
  nextToken?: string | null,
};

export type RACSensors = {
  __typename: "RACSensors",
  CO2?: number | null,
  MAC: number,
  O2?: number | null,
  atm_temperature?: number | null,
  conductivity?: number | null,
  humidity?: number | null,
  pH?: number | null,
  temperature?: number | null,
  timestamp: string,
};

export type UpdateActuationByVariableInput = {
  Min: number,
};

export type ActuationMin = {
  __typename: "ActuationMin",
  Min?: number | null,
  PesudoMin?: number | null,
  Setup: string,
  Variable: string,
};

export type CreateActuationMaxInput = {
  Max?: number | null,
  PesudoMax?: number | null,
  Setup: string,
  Variable: string,
};

export type ModelActuationMaxConditionInput = {
  Max?: ModelFloatInput | null,
  PesudoMax?: ModelFloatInput | null,
  and?: Array< ModelActuationMaxConditionInput | null > | null,
  or?: Array< ModelActuationMaxConditionInput | null > | null,
  not?: ModelActuationMaxConditionInput | null,
};

export type ActuationMax = {
  __typename: "ActuationMax",
  Max?: number | null,
  PesudoMax?: number | null,
  Setup: string,
  Variable: string,
};

export type UpdateActuationMaxInput = {
  Max?: number | null,
  PesudoMax?: number | null,
  Setup: string,
  Variable: string,
};

export type DeleteActuationMaxInput = {
  Setup: string,
  Variable: string,
};

export type CreateActuationMinInput = {
  Min?: number | null,
  PesudoMin?: number | null,
  Setup: string,
  Variable: string,
};

export type ModelActuationMinConditionInput = {
  Min?: ModelFloatInput | null,
  PesudoMin?: ModelFloatInput | null,
  and?: Array< ModelActuationMinConditionInput | null > | null,
  or?: Array< ModelActuationMinConditionInput | null > | null,
  not?: ModelActuationMinConditionInput | null,
};

export type UpdateActuationMinInput = {
  Min?: number | null,
  PesudoMin?: number | null,
  Setup: string,
  Variable: string,
};

export type DeleteActuationMinInput = {
  Setup: string,
  Variable: string,
};

export type CreateRACSensorsInput = {
  CO2?: number | null,
  MAC: number,
  O2?: number | null,
  atm_temperature?: number | null,
  conductivity?: number | null,
  humidity?: number | null,
  pH?: number | null,
  temperature?: number | null,
  timestamp: string,
};

export type ModelRACSensorsConditionInput = {
  CO2?: ModelFloatInput | null,
  O2?: ModelFloatInput | null,
  atm_temperature?: ModelFloatInput | null,
  conductivity?: ModelFloatInput | null,
  humidity?: ModelFloatInput | null,
  pH?: ModelFloatInput | null,
  temperature?: ModelFloatInput | null,
  and?: Array< ModelRACSensorsConditionInput | null > | null,
  or?: Array< ModelRACSensorsConditionInput | null > | null,
  not?: ModelRACSensorsConditionInput | null,
};

export type UpdateRACSensorsInput = {
  CO2?: number | null,
  MAC: number,
  O2?: number | null,
  atm_temperature?: number | null,
  conductivity?: number | null,
  humidity?: number | null,
  pH?: number | null,
  temperature?: number | null,
  timestamp: string,
};

export type DeleteRACSensorsInput = {
  MAC: number,
  timestamp: string,
};

export type CreateSoilSensorsInput = {
  CO2?: number | null,
  MAC: number,
  O2?: number | null,
  atm_temperature?: number | null,
  conductivity?: number | null,
  humidity?: number | null,
  Nitrogen?: number | null,
  Phosphorous?: number | null,
  pH?: number | null,
  temperature?: number | null,
  timestamp: string,
};

export type ModelSoilSensorsConditionInput = {
  CO2?: ModelFloatInput | null,
  O2?: ModelFloatInput | null,
  atm_temperature?: ModelFloatInput | null,
  conductivity?: ModelFloatInput | null,
  humidity?: ModelFloatInput | null,
  Nitrogen?: ModelFloatInput | null,
  Phosphorous?: ModelFloatInput | null,
  pH?: ModelFloatInput | null,
  temperature?: ModelFloatInput | null,
  and?: Array< ModelSoilSensorsConditionInput | null > | null,
  or?: Array< ModelSoilSensorsConditionInput | null > | null,
  not?: ModelSoilSensorsConditionInput | null,
};

export type SoilSensors = {
  __typename: "SoilSensors",
  CO2?: number | null,
  MAC: number,
  O2?: number | null,
  atm_temperature?: number | null,
  conductivity?: number | null,
  humidity?: number | null,
  Nitrogen?: number | null,
  Phosphorous?: number | null,
  pH?: number | null,
  temperature?: number | null,
  timestamp: string,
};

export type UpdateSoilSensorsInput = {
  CO2?: number | null,
  MAC: number,
  O2?: number | null,
  atm_temperature?: number | null,
  conductivity?: number | null,
  humidity?: number | null,
  Nitrogen?: number | null,
  Phosphorous?: number | null,
  pH?: number | null,
  temperature?: number | null,
  timestamp: string,
};

export type DeleteSoilSensorsInput = {
  MAC: number,
  timestamp: string,
};

export type CreatePlantRepositoryInput = {
  Crops: string,
  Name: string,
  nitrogen_upper?: number | null,
  nitrogen_lower?: number | null,
  ec_upper?: number | null,
  ec_lower?: number | null,
  pH_upper?: number | null,
  pH_lower?: number | null,
};

export type ModelPlantRepositoryConditionInput = {
  Name?: ModelStringInput | null,
  nitrogen_upper?: ModelFloatInput | null,
  nitrogen_lower?: ModelFloatInput | null,
  ec_upper?: ModelFloatInput | null,
  ec_lower?: ModelFloatInput | null,
  pH_upper?: ModelFloatInput | null,
  pH_lower?: ModelFloatInput | null,
  and?: Array< ModelPlantRepositoryConditionInput | null > | null,
  or?: Array< ModelPlantRepositoryConditionInput | null > | null,
  not?: ModelPlantRepositoryConditionInput | null,
};

export type PlantRepository = {
  __typename: "PlantRepository",
  Crops: string,
  Name: string,
  nitrogen_upper?: number | null,
  nitrogen_lower?: number | null,
  ec_upper?: number | null,
  ec_lower?: number | null,
  pH_upper?: number | null,
  pH_lower?: number | null,
};

export type UpdatePlantRepositoryInput = {
  Crops: string,
  Name?: string | null,
  nitrogen_upper?: number | null,
  nitrogen_lower?: number | null,
  ec_upper?: number | null,
  ec_lower?: number | null,
  pH_upper?: number | null,
  pH_lower?: number | null,
};

export type DeletePlantRepositoryInput = {
  Crops: string,
};

export type CreateEventTemplateInput = {
  userId?: string | null,
  eventName: string,
  description?: string | null,
  duration: number,
  id?: string | null,
};

export type ModelEventTemplateConditionInput = {
  userId?: ModelStringInput | null,
  eventName?: ModelStringInput | null,
  description?: ModelStringInput | null,
  duration?: ModelIntInput | null,
  and?: Array< ModelEventTemplateConditionInput | null > | null,
  or?: Array< ModelEventTemplateConditionInput | null > | null,
  not?: ModelEventTemplateConditionInput | null,
};

export type EventTemplate = {
  __typename: "EventTemplate",
  userId?: string | null,
  eventName: string,
  description?: string | null,
  duration: number,
  id: string,
};

export type UpdateEventTemplateInput = {
  userId?: string | null,
  eventName?: string | null,
  description?: string | null,
  duration?: number | null,
  id: string,
};

export type DeleteEventTemplateInput = {
  id: string,
};

export type ModelActuationMaxFilterInput = {
  Max?: ModelFloatInput | null,
  PesudoMax?: ModelFloatInput | null,
  Setup?: ModelStringInput | null,
  Variable?: ModelStringInput | null,
  and?: Array< ModelActuationMaxFilterInput | null > | null,
  or?: Array< ModelActuationMaxFilterInput | null > | null,
  not?: ModelActuationMaxFilterInput | null,
};

export type ModelActuationMaxConnection = {
  __typename: "ModelActuationMaxConnection",
  items:  Array<ActuationMax | null >,
  nextToken?: string | null,
};

export type ModelActuationMinFilterInput = {
  Min?: ModelFloatInput | null,
  PesudoMin?: ModelFloatInput | null,
  Setup?: ModelStringInput | null,
  Variable?: ModelStringInput | null,
  and?: Array< ModelActuationMinFilterInput | null > | null,
  or?: Array< ModelActuationMinFilterInput | null > | null,
  not?: ModelActuationMinFilterInput | null,
};

export type ModelActuationMinConnection = {
  __typename: "ModelActuationMinConnection",
  items:  Array<ActuationMin | null >,
  nextToken?: string | null,
};

export type ModelSoilSensorsFilterInput = {
  CO2?: ModelFloatInput | null,
  MAC?: ModelIntInput | null,
  O2?: ModelFloatInput | null,
  atm_temperature?: ModelFloatInput | null,
  conductivity?: ModelFloatInput | null,
  humidity?: ModelFloatInput | null,
  Nitrogen?: ModelFloatInput | null,
  Phosphorous?: ModelFloatInput | null,
  pH?: ModelFloatInput | null,
  temperature?: ModelFloatInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelSoilSensorsFilterInput | null > | null,
  or?: Array< ModelSoilSensorsFilterInput | null > | null,
  not?: ModelSoilSensorsFilterInput | null,
};

export type ModelSoilSensorsConnection = {
  __typename: "ModelSoilSensorsConnection",
  items:  Array<SoilSensors | null >,
  nextToken?: string | null,
};

export type ModelPlantRepositoryFilterInput = {
  Crops?: ModelStringInput | null,
  Name?: ModelStringInput | null,
  nitrogen_upper?: ModelFloatInput | null,
  nitrogen_lower?: ModelFloatInput | null,
  ec_upper?: ModelFloatInput | null,
  ec_lower?: ModelFloatInput | null,
  pH_upper?: ModelFloatInput | null,
  pH_lower?: ModelFloatInput | null,
  and?: Array< ModelPlantRepositoryFilterInput | null > | null,
  or?: Array< ModelPlantRepositoryFilterInput | null > | null,
  not?: ModelPlantRepositoryFilterInput | null,
};

export type ModelPlantRepositoryConnection = {
  __typename: "ModelPlantRepositoryConnection",
  items:  Array<PlantRepository | null >,
  nextToken?: string | null,
};

export type ModelEventTemplateFilterInput = {
  userId?: ModelStringInput | null,
  eventName?: ModelStringInput | null,
  description?: ModelStringInput | null,
  duration?: ModelIntInput | null,
  and?: Array< ModelEventTemplateFilterInput | null > | null,
  or?: Array< ModelEventTemplateFilterInput | null > | null,
  not?: ModelEventTemplateFilterInput | null,
};

export type ModelEventTemplateConnection = {
  __typename: "ModelEventTemplateConnection",
  items:  Array<EventTemplate | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionActuationMaxFilterInput = {
  Max?: ModelSubscriptionFloatInput | null,
  PesudoMax?: ModelSubscriptionFloatInput | null,
  Setup?: ModelSubscriptionStringInput | null,
  Variable?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionActuationMaxFilterInput | null > | null,
  or?: Array< ModelSubscriptionActuationMaxFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionActuationMinFilterInput = {
  Min?: ModelSubscriptionFloatInput | null,
  PesudoMin?: ModelSubscriptionFloatInput | null,
  Setup?: ModelSubscriptionStringInput | null,
  Variable?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionActuationMinFilterInput | null > | null,
  or?: Array< ModelSubscriptionActuationMinFilterInput | null > | null,
};

export type ModelSubscriptionRACSensorsFilterInput = {
  CO2?: ModelSubscriptionFloatInput | null,
  MAC?: ModelSubscriptionIntInput | null,
  O2?: ModelSubscriptionFloatInput | null,
  atm_temperature?: ModelSubscriptionFloatInput | null,
  conductivity?: ModelSubscriptionFloatInput | null,
  humidity?: ModelSubscriptionFloatInput | null,
  pH?: ModelSubscriptionFloatInput | null,
  temperature?: ModelSubscriptionFloatInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRACSensorsFilterInput | null > | null,
  or?: Array< ModelSubscriptionRACSensorsFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionSoilSensorsFilterInput = {
  CO2?: ModelSubscriptionFloatInput | null,
  MAC?: ModelSubscriptionIntInput | null,
  O2?: ModelSubscriptionFloatInput | null,
  atm_temperature?: ModelSubscriptionFloatInput | null,
  conductivity?: ModelSubscriptionFloatInput | null,
  humidity?: ModelSubscriptionFloatInput | null,
  Nitrogen?: ModelSubscriptionFloatInput | null,
  Phosphorous?: ModelSubscriptionFloatInput | null,
  pH?: ModelSubscriptionFloatInput | null,
  temperature?: ModelSubscriptionFloatInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSoilSensorsFilterInput | null > | null,
  or?: Array< ModelSubscriptionSoilSensorsFilterInput | null > | null,
};

export type ModelSubscriptionPlantRepositoryFilterInput = {
  Crops?: ModelSubscriptionStringInput | null,
  Name?: ModelSubscriptionStringInput | null,
  nitrogen_upper?: ModelSubscriptionFloatInput | null,
  nitrogen_lower?: ModelSubscriptionFloatInput | null,
  ec_upper?: ModelSubscriptionFloatInput | null,
  ec_lower?: ModelSubscriptionFloatInput | null,
  pH_upper?: ModelSubscriptionFloatInput | null,
  pH_lower?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionPlantRepositoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionPlantRepositoryFilterInput | null > | null,
};

export type ModelSubscriptionEventTemplateFilterInput = {
  userId?: ModelSubscriptionStringInput | null,
  eventName?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  duration?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionEventTemplateFilterInput | null > | null,
  or?: Array< ModelSubscriptionEventTemplateFilterInput | null > | null,
};

export type ListRACSensors2QueryVariables = {
  MAC?: number | null,
  timestamp?: ModelStringKeyConditionInput | null,
  filter?: ModelRACSensorsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListRACSensors2Query = {
  listRACSensors?:  {
    __typename: "ModelRACSensorsConnection",
    items:  Array< {
      __typename: "RACSensors",
      CO2?: number | null,
      MAC: number,
      O2?: number | null,
      atm_temperature?: number | null,
      humidity?: number | null,
      timestamp: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListRACSensors1QueryVariables = {
  MAC?: number | null,
  timestamp?: ModelStringKeyConditionInput | null,
  filter?: ModelRACSensorsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListRACSensors1Query = {
  listRACSensors?:  {
    __typename: "ModelRACSensorsConnection",
    items:  Array< {
      __typename: "RACSensors",
      MAC: number,
      conductivity?: number | null,
      pH?: number | null,
      temperature?: number | null,
      timestamp: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UpdateActuationMinByVariableMutationVariables = {
  input?: UpdateActuationByVariableInput | null,
  variable?: string | null,
};

export type UpdateActuationMinByVariableMutation = {
  updateActuationMinByVariable:  {
    __typename: "ActuationMin",
    Min?: number | null,
    PesudoMin?: number | null,
    Setup: string,
    Variable: string,
  },
};

export type CreateActuationMaxMutationVariables = {
  input: CreateActuationMaxInput,
  condition?: ModelActuationMaxConditionInput | null,
};

export type CreateActuationMaxMutation = {
  createActuationMax?:  {
    __typename: "ActuationMax",
    Max?: number | null,
    PesudoMax?: number | null,
    Setup: string,
    Variable: string,
  } | null,
};

export type UpdateActuationMaxMutationVariables = {
  input: UpdateActuationMaxInput,
  condition?: ModelActuationMaxConditionInput | null,
};

export type UpdateActuationMaxMutation = {
  updateActuationMax?:  {
    __typename: "ActuationMax",
    Max?: number | null,
    PesudoMax?: number | null,
    Setup: string,
    Variable: string,
  } | null,
};

export type DeleteActuationMaxMutationVariables = {
  input: DeleteActuationMaxInput,
  condition?: ModelActuationMaxConditionInput | null,
};

export type DeleteActuationMaxMutation = {
  deleteActuationMax?:  {
    __typename: "ActuationMax",
    Max?: number | null,
    PesudoMax?: number | null,
    Setup: string,
    Variable: string,
  } | null,
};

export type CreateActuationMinMutationVariables = {
  input: CreateActuationMinInput,
  condition?: ModelActuationMinConditionInput | null,
};

export type CreateActuationMinMutation = {
  createActuationMin?:  {
    __typename: "ActuationMin",
    Min?: number | null,
    PesudoMin?: number | null,
    Setup: string,
    Variable: string,
  } | null,
};

export type UpdateActuationMinMutationVariables = {
  input: UpdateActuationMinInput,
  condition?: ModelActuationMinConditionInput | null,
};

export type UpdateActuationMinMutation = {
  updateActuationMin?:  {
    __typename: "ActuationMin",
    Min?: number | null,
    PesudoMin?: number | null,
    Setup: string,
    Variable: string,
  } | null,
};

export type DeleteActuationMinMutationVariables = {
  input: DeleteActuationMinInput,
  condition?: ModelActuationMinConditionInput | null,
};

export type DeleteActuationMinMutation = {
  deleteActuationMin?:  {
    __typename: "ActuationMin",
    Min?: number | null,
    PesudoMin?: number | null,
    Setup: string,
    Variable: string,
  } | null,
};

export type CreateRACSensorsMutationVariables = {
  input: CreateRACSensorsInput,
  condition?: ModelRACSensorsConditionInput | null,
};

export type CreateRACSensorsMutation = {
  createRACSensors?:  {
    __typename: "RACSensors",
    CO2?: number | null,
    MAC: number,
    O2?: number | null,
    atm_temperature?: number | null,
    conductivity?: number | null,
    humidity?: number | null,
    pH?: number | null,
    temperature?: number | null,
    timestamp: string,
  } | null,
};

export type UpdateRACSensorsMutationVariables = {
  input: UpdateRACSensorsInput,
  condition?: ModelRACSensorsConditionInput | null,
};

export type UpdateRACSensorsMutation = {
  updateRACSensors?:  {
    __typename: "RACSensors",
    CO2?: number | null,
    MAC: number,
    O2?: number | null,
    atm_temperature?: number | null,
    conductivity?: number | null,
    humidity?: number | null,
    pH?: number | null,
    temperature?: number | null,
    timestamp: string,
  } | null,
};

export type DeleteRACSensorsMutationVariables = {
  input: DeleteRACSensorsInput,
  condition?: ModelRACSensorsConditionInput | null,
};

export type DeleteRACSensorsMutation = {
  deleteRACSensors?:  {
    __typename: "RACSensors",
    CO2?: number | null,
    MAC: number,
    O2?: number | null,
    atm_temperature?: number | null,
    conductivity?: number | null,
    humidity?: number | null,
    pH?: number | null,
    temperature?: number | null,
    timestamp: string,
  } | null,
};

export type CreateSoilSensorsMutationVariables = {
  input: CreateSoilSensorsInput,
  condition?: ModelSoilSensorsConditionInput | null,
};

export type CreateSoilSensorsMutation = {
  createSoilSensors?:  {
    __typename: "SoilSensors",
    CO2?: number | null,
    MAC: number,
    O2?: number | null,
    atm_temperature?: number | null,
    conductivity?: number | null,
    humidity?: number | null,
    Nitrogen?: number | null,
    Phosphorous?: number | null,
    pH?: number | null,
    temperature?: number | null,
    timestamp: string,
  } | null,
};

export type UpdateSoilSensorsMutationVariables = {
  input: UpdateSoilSensorsInput,
  condition?: ModelSoilSensorsConditionInput | null,
};

export type UpdateSoilSensorsMutation = {
  updateSoilSensors?:  {
    __typename: "SoilSensors",
    CO2?: number | null,
    MAC: number,
    O2?: number | null,
    atm_temperature?: number | null,
    conductivity?: number | null,
    humidity?: number | null,
    Nitrogen?: number | null,
    Phosphorous?: number | null,
    pH?: number | null,
    temperature?: number | null,
    timestamp: string,
  } | null,
};

export type DeleteSoilSensorsMutationVariables = {
  input: DeleteSoilSensorsInput,
  condition?: ModelSoilSensorsConditionInput | null,
};

export type DeleteSoilSensorsMutation = {
  deleteSoilSensors?:  {
    __typename: "SoilSensors",
    CO2?: number | null,
    MAC: number,
    O2?: number | null,
    atm_temperature?: number | null,
    conductivity?: number | null,
    humidity?: number | null,
    Nitrogen?: number | null,
    Phosphorous?: number | null,
    pH?: number | null,
    temperature?: number | null,
    timestamp: string,
  } | null,
};

export type CreatePlantRepositoryMutationVariables = {
  input: CreatePlantRepositoryInput,
  condition?: ModelPlantRepositoryConditionInput | null,
};

export type CreatePlantRepositoryMutation = {
  createPlantRepository?:  {
    __typename: "PlantRepository",
    Crops: string,
    Name: string,
    nitrogen_upper?: number | null,
    nitrogen_lower?: number | null,
    ec_upper?: number | null,
    ec_lower?: number | null,
    pH_upper?: number | null,
    pH_lower?: number | null,
  } | null,
};

export type UpdatePlantRepositoryMutationVariables = {
  input: UpdatePlantRepositoryInput,
  condition?: ModelPlantRepositoryConditionInput | null,
};

export type UpdatePlantRepositoryMutation = {
  updatePlantRepository?:  {
    __typename: "PlantRepository",
    Crops: string,
    Name: string,
    nitrogen_upper?: number | null,
    nitrogen_lower?: number | null,
    ec_upper?: number | null,
    ec_lower?: number | null,
    pH_upper?: number | null,
    pH_lower?: number | null,
  } | null,
};

export type DeletePlantRepositoryMutationVariables = {
  input: DeletePlantRepositoryInput,
  condition?: ModelPlantRepositoryConditionInput | null,
};

export type DeletePlantRepositoryMutation = {
  deletePlantRepository?:  {
    __typename: "PlantRepository",
    Crops: string,
    Name: string,
    nitrogen_upper?: number | null,
    nitrogen_lower?: number | null,
    ec_upper?: number | null,
    ec_lower?: number | null,
    pH_upper?: number | null,
    pH_lower?: number | null,
  } | null,
};

export type CreateEventTemplateMutationVariables = {
  input: CreateEventTemplateInput,
  condition?: ModelEventTemplateConditionInput | null,
};

export type CreateEventTemplateMutation = {
  createEventTemplate?:  {
    __typename: "EventTemplate",
    userId?: string | null,
    eventName: string,
    description?: string | null,
    duration: number,
    id: string,
  } | null,
};

export type UpdateEventTemplateMutationVariables = {
  input: UpdateEventTemplateInput,
  condition?: ModelEventTemplateConditionInput | null,
};

export type UpdateEventTemplateMutation = {
  updateEventTemplate?:  {
    __typename: "EventTemplate",
    userId?: string | null,
    eventName: string,
    description?: string | null,
    duration: number,
    id: string,
  } | null,
};

export type DeleteEventTemplateMutationVariables = {
  input: DeleteEventTemplateInput,
  condition?: ModelEventTemplateConditionInput | null,
};

export type DeleteEventTemplateMutation = {
  deleteEventTemplate?:  {
    __typename: "EventTemplate",
    userId?: string | null,
    eventName: string,
    description?: string | null,
    duration: number,
    id: string,
  } | null,
};

export type GetActuationMaxQueryVariables = {
  Setup: string,
  Variable: string,
};

export type GetActuationMaxQuery = {
  getActuationMax?:  {
    __typename: "ActuationMax",
    Max?: number | null,
    PesudoMax?: number | null,
    Setup: string,
    Variable: string,
  } | null,
};

export type ListActuationMaxesQueryVariables = {
  Setup?: string | null,
  Variable?: ModelStringKeyConditionInput | null,
  filter?: ModelActuationMaxFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListActuationMaxesQuery = {
  listActuationMaxes?:  {
    __typename: "ModelActuationMaxConnection",
    items:  Array< {
      __typename: "ActuationMax",
      Max?: number | null,
      PesudoMax?: number | null,
      Setup: string,
      Variable: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetActuationMinQueryVariables = {
  Setup: string,
  Variable: string,
};

export type GetActuationMinQuery = {
  getActuationMin?:  {
    __typename: "ActuationMin",
    Min?: number | null,
    PesudoMin?: number | null,
    Setup: string,
    Variable: string,
  } | null,
};

export type ListActuationMinsQueryVariables = {
  Setup?: string | null,
  Variable?: ModelStringKeyConditionInput | null,
  filter?: ModelActuationMinFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListActuationMinsQuery = {
  listActuationMins?:  {
    __typename: "ModelActuationMinConnection",
    items:  Array< {
      __typename: "ActuationMin",
      Min?: number | null,
      PesudoMin?: number | null,
      Setup: string,
      Variable: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetRACSensorsQueryVariables = {
  MAC: number,
  timestamp: string,
};

export type GetRACSensorsQuery = {
  getRACSensors?:  {
    __typename: "RACSensors",
    CO2?: number | null,
    MAC: number,
    O2?: number | null,
    atm_temperature?: number | null,
    conductivity?: number | null,
    humidity?: number | null,
    pH?: number | null,
    temperature?: number | null,
    timestamp: string,
  } | null,
};

export type ListRACSensorsQueryVariables = {
  MAC?: number | null,
  timestamp?: ModelStringKeyConditionInput | null,
  filter?: ModelRACSensorsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListRACSensorsQuery = {
  listRACSensors?:  {
    __typename: "ModelRACSensorsConnection",
    items:  Array< {
      __typename: "RACSensors",
      CO2?: number | null,
      MAC: number,
      O2?: number | null,
      atm_temperature?: number | null,
      conductivity?: number | null,
      humidity?: number | null,
      pH?: number | null,
      temperature?: number | null,
      timestamp: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSoilSensorsQueryVariables = {
  MAC: number,
  timestamp: string,
};

export type GetSoilSensorsQuery = {
  getSoilSensors?:  {
    __typename: "SoilSensors",
    CO2?: number | null,
    MAC: number,
    O2?: number | null,
    atm_temperature?: number | null,
    conductivity?: number | null,
    humidity?: number | null,
    Nitrogen?: number | null,
    Phosphorous?: number | null,
    pH?: number | null,
    temperature?: number | null,
    timestamp: string,
  } | null,
};

export type ListSoilSensorsQueryVariables = {
  MAC?: number | null,
  timestamp?: ModelStringKeyConditionInput | null,
  filter?: ModelSoilSensorsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListSoilSensorsQuery = {
  listSoilSensors?:  {
    __typename: "ModelSoilSensorsConnection",
    items:  Array< {
      __typename: "SoilSensors",
      CO2?: number | null,
      MAC: number,
      O2?: number | null,
      atm_temperature?: number | null,
      conductivity?: number | null,
      humidity?: number | null,
      Nitrogen?: number | null,
      Phosphorous?: number | null,
      pH?: number | null,
      temperature?: number | null,
      timestamp: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPlantRepositoryQueryVariables = {
  Crops: string,
};

export type GetPlantRepositoryQuery = {
  getPlantRepository?:  {
    __typename: "PlantRepository",
    Crops: string,
    Name: string,
    nitrogen_upper?: number | null,
    nitrogen_lower?: number | null,
    ec_upper?: number | null,
    ec_lower?: number | null,
    pH_upper?: number | null,
    pH_lower?: number | null,
  } | null,
};

export type ListPlantRepositoriesQueryVariables = {
  Crops?: string | null,
  filter?: ModelPlantRepositoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPlantRepositoriesQuery = {
  listPlantRepositories?:  {
    __typename: "ModelPlantRepositoryConnection",
    items:  Array< {
      __typename: "PlantRepository",
      Crops: string,
      Name: string,
      nitrogen_upper?: number | null,
      nitrogen_lower?: number | null,
      ec_upper?: number | null,
      ec_lower?: number | null,
      pH_upper?: number | null,
      pH_lower?: number | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEventTemplateQueryVariables = {
  id: string,
};

export type GetEventTemplateQuery = {
  getEventTemplate?:  {
    __typename: "EventTemplate",
    userId?: string | null,
    eventName: string,
    description?: string | null,
    duration: number,
    id: string,
  } | null,
};

export type ListEventTemplatesQueryVariables = {
  filter?: ModelEventTemplateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventTemplatesQuery = {
  listEventTemplates?:  {
    __typename: "ModelEventTemplateConnection",
    items:  Array< {
      __typename: "EventTemplate",
      userId?: string | null,
      eventName: string,
      description?: string | null,
      duration: number,
      id: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserEventTemplatesQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelEventTemplateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetUserEventTemplatesQuery = {
  getUserEventTemplates?:  {
    __typename: "ModelEventTemplateConnection",
    items:  Array< {
      __typename: "EventTemplate",
      userId?: string | null,
      eventName: string,
      description?: string | null,
      duration: number,
      id: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateActuationMaxSubscriptionVariables = {
  filter?: ModelSubscriptionActuationMaxFilterInput | null,
};

export type OnCreateActuationMaxSubscription = {
  onCreateActuationMax?:  {
    __typename: "ActuationMax",
    Max?: number | null,
    PesudoMax?: number | null,
    Setup: string,
    Variable: string,
  } | null,
};

export type OnUpdateActuationMaxSubscriptionVariables = {
  filter?: ModelSubscriptionActuationMaxFilterInput | null,
};

export type OnUpdateActuationMaxSubscription = {
  onUpdateActuationMax?:  {
    __typename: "ActuationMax",
    Max?: number | null,
    PesudoMax?: number | null,
    Setup: string,
    Variable: string,
  } | null,
};

export type OnDeleteActuationMaxSubscriptionVariables = {
  filter?: ModelSubscriptionActuationMaxFilterInput | null,
};

export type OnDeleteActuationMaxSubscription = {
  onDeleteActuationMax?:  {
    __typename: "ActuationMax",
    Max?: number | null,
    PesudoMax?: number | null,
    Setup: string,
    Variable: string,
  } | null,
};

export type OnCreateActuationMinSubscriptionVariables = {
  filter?: ModelSubscriptionActuationMinFilterInput | null,
};

export type OnCreateActuationMinSubscription = {
  onCreateActuationMin?:  {
    __typename: "ActuationMin",
    Min?: number | null,
    PesudoMin?: number | null,
    Setup: string,
    Variable: string,
  } | null,
};

export type OnUpdateActuationMinSubscriptionVariables = {
  filter?: ModelSubscriptionActuationMinFilterInput | null,
};

export type OnUpdateActuationMinSubscription = {
  onUpdateActuationMin?:  {
    __typename: "ActuationMin",
    Min?: number | null,
    PesudoMin?: number | null,
    Setup: string,
    Variable: string,
  } | null,
};

export type OnDeleteActuationMinSubscriptionVariables = {
  filter?: ModelSubscriptionActuationMinFilterInput | null,
};

export type OnDeleteActuationMinSubscription = {
  onDeleteActuationMin?:  {
    __typename: "ActuationMin",
    Min?: number | null,
    PesudoMin?: number | null,
    Setup: string,
    Variable: string,
  } | null,
};

export type OnCreateRACSensorsSubscriptionVariables = {
  filter?: ModelSubscriptionRACSensorsFilterInput | null,
};

export type OnCreateRACSensorsSubscription = {
  onCreateRACSensors?:  {
    __typename: "RACSensors",
    CO2?: number | null,
    MAC: number,
    O2?: number | null,
    atm_temperature?: number | null,
    conductivity?: number | null,
    humidity?: number | null,
    pH?: number | null,
    temperature?: number | null,
    timestamp: string,
  } | null,
};

export type OnUpdateRACSensorsSubscriptionVariables = {
  filter?: ModelSubscriptionRACSensorsFilterInput | null,
};

export type OnUpdateRACSensorsSubscription = {
  onUpdateRACSensors?:  {
    __typename: "RACSensors",
    CO2?: number | null,
    MAC: number,
    O2?: number | null,
    atm_temperature?: number | null,
    conductivity?: number | null,
    humidity?: number | null,
    pH?: number | null,
    temperature?: number | null,
    timestamp: string,
  } | null,
};

export type OnDeleteRACSensorsSubscriptionVariables = {
  filter?: ModelSubscriptionRACSensorsFilterInput | null,
};

export type OnDeleteRACSensorsSubscription = {
  onDeleteRACSensors?:  {
    __typename: "RACSensors",
    CO2?: number | null,
    MAC: number,
    O2?: number | null,
    atm_temperature?: number | null,
    conductivity?: number | null,
    humidity?: number | null,
    pH?: number | null,
    temperature?: number | null,
    timestamp: string,
  } | null,
};

export type OnCreateSoilSensorsSubscriptionVariables = {
  filter?: ModelSubscriptionSoilSensorsFilterInput | null,
};

export type OnCreateSoilSensorsSubscription = {
  onCreateSoilSensors?:  {
    __typename: "SoilSensors",
    CO2?: number | null,
    MAC: number,
    O2?: number | null,
    atm_temperature?: number | null,
    conductivity?: number | null,
    humidity?: number | null,
    Nitrogen?: number | null,
    Phosphorous?: number | null,
    pH?: number | null,
    temperature?: number | null,
    timestamp: string,
  } | null,
};

export type OnUpdateSoilSensorsSubscriptionVariables = {
  filter?: ModelSubscriptionSoilSensorsFilterInput | null,
};

export type OnUpdateSoilSensorsSubscription = {
  onUpdateSoilSensors?:  {
    __typename: "SoilSensors",
    CO2?: number | null,
    MAC: number,
    O2?: number | null,
    atm_temperature?: number | null,
    conductivity?: number | null,
    humidity?: number | null,
    Nitrogen?: number | null,
    Phosphorous?: number | null,
    pH?: number | null,
    temperature?: number | null,
    timestamp: string,
  } | null,
};

export type OnDeleteSoilSensorsSubscriptionVariables = {
  filter?: ModelSubscriptionSoilSensorsFilterInput | null,
};

export type OnDeleteSoilSensorsSubscription = {
  onDeleteSoilSensors?:  {
    __typename: "SoilSensors",
    CO2?: number | null,
    MAC: number,
    O2?: number | null,
    atm_temperature?: number | null,
    conductivity?: number | null,
    humidity?: number | null,
    Nitrogen?: number | null,
    Phosphorous?: number | null,
    pH?: number | null,
    temperature?: number | null,
    timestamp: string,
  } | null,
};

export type OnCreatePlantRepositorySubscriptionVariables = {
  filter?: ModelSubscriptionPlantRepositoryFilterInput | null,
};

export type OnCreatePlantRepositorySubscription = {
  onCreatePlantRepository?:  {
    __typename: "PlantRepository",
    Crops: string,
    Name: string,
    nitrogen_upper?: number | null,
    nitrogen_lower?: number | null,
    ec_upper?: number | null,
    ec_lower?: number | null,
    pH_upper?: number | null,
    pH_lower?: number | null,
  } | null,
};

export type OnUpdatePlantRepositorySubscriptionVariables = {
  filter?: ModelSubscriptionPlantRepositoryFilterInput | null,
};

export type OnUpdatePlantRepositorySubscription = {
  onUpdatePlantRepository?:  {
    __typename: "PlantRepository",
    Crops: string,
    Name: string,
    nitrogen_upper?: number | null,
    nitrogen_lower?: number | null,
    ec_upper?: number | null,
    ec_lower?: number | null,
    pH_upper?: number | null,
    pH_lower?: number | null,
  } | null,
};

export type OnDeletePlantRepositorySubscriptionVariables = {
  filter?: ModelSubscriptionPlantRepositoryFilterInput | null,
};

export type OnDeletePlantRepositorySubscription = {
  onDeletePlantRepository?:  {
    __typename: "PlantRepository",
    Crops: string,
    Name: string,
    nitrogen_upper?: number | null,
    nitrogen_lower?: number | null,
    ec_upper?: number | null,
    ec_lower?: number | null,
    pH_upper?: number | null,
    pH_lower?: number | null,
  } | null,
};

export type OnCreateEventTemplateSubscriptionVariables = {
  filter?: ModelSubscriptionEventTemplateFilterInput | null,
};

export type OnCreateEventTemplateSubscription = {
  onCreateEventTemplate?:  {
    __typename: "EventTemplate",
    userId?: string | null,
    eventName: string,
    description?: string | null,
    duration: number,
    id: string,
  } | null,
};

export type OnUpdateEventTemplateSubscriptionVariables = {
  filter?: ModelSubscriptionEventTemplateFilterInput | null,
};

export type OnUpdateEventTemplateSubscription = {
  onUpdateEventTemplate?:  {
    __typename: "EventTemplate",
    userId?: string | null,
    eventName: string,
    description?: string | null,
    duration: number,
    id: string,
  } | null,
};

export type OnDeleteEventTemplateSubscriptionVariables = {
  filter?: ModelSubscriptionEventTemplateFilterInput | null,
};

export type OnDeleteEventTemplateSubscription = {
  onDeleteEventTemplate?:  {
    __typename: "EventTemplate",
    userId?: string | null,
    eventName: string,
    description?: string | null,
    duration: number,
    id: string,
  } | null,
};
