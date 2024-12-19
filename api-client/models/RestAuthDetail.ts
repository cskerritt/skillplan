/* tslint:disable */
/* eslint-disable */
/**
 * SkillPlan
 * Life Care Planning Application for Kincaid Wolstein Vocational and Rehabilitation Services
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface RestAuthDetail
 */
export interface RestAuthDetail {
    /**
     * 
     * @type {string}
     * @memberof RestAuthDetail
     */
    readonly detail: string;
}

/**
 * Check if a given object implements the RestAuthDetail interface.
 */
export function instanceOfRestAuthDetail(value: object): value is RestAuthDetail {
    if (!('detail' in value) || value['detail'] === undefined) return false;
    return true;
}

export function RestAuthDetailFromJSON(json: any): RestAuthDetail {
    return RestAuthDetailFromJSONTyped(json, false);
}

export function RestAuthDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): RestAuthDetail {
    if (json == null) {
        return json;
    }
    return {
        
        'detail': json['detail'],
    };
}

  export function RestAuthDetailToJSON(json: any): RestAuthDetail {
      return RestAuthDetailToJSONTyped(json, false);
  }

  export function RestAuthDetailToJSONTyped(value?: Omit<RestAuthDetail, 'detail'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
    };
}

