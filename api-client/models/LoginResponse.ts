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
import type { JWT } from './JWT';
import {
    JWTFromJSON,
    JWTFromJSONTyped,
    JWTToJSON,
    JWTToJSONTyped,
} from './JWT';

/**
 * 
 * @export
 * @interface LoginResponse
 */
export interface LoginResponse {
    /**
     * 
     * @type {string}
     * @memberof LoginResponse
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof LoginResponse
     */
    detail: string;
    /**
     * 
     * @type {JWT}
     * @memberof LoginResponse
     */
    jwt?: JWT;
    /**
     * 
     * @type {string}
     * @memberof LoginResponse
     */
    tempOtpToken?: string;
}

/**
 * Check if a given object implements the LoginResponse interface.
 */
export function instanceOfLoginResponse(value: object): value is LoginResponse {
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('detail' in value) || value['detail'] === undefined) return false;
    return true;
}

export function LoginResponseFromJSON(json: any): LoginResponse {
    return LoginResponseFromJSONTyped(json, false);
}

export function LoginResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LoginResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'status': json['status'],
        'detail': json['detail'],
        'jwt': json['jwt'] == null ? undefined : JWTFromJSON(json['jwt']),
        'tempOtpToken': json['temp_otp_token'] == null ? undefined : json['temp_otp_token'],
    };
}

  export function LoginResponseToJSON(json: any): LoginResponse {
      return LoginResponseToJSONTyped(json, false);
  }

  export function LoginResponseToJSONTyped(value?: LoginResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'status': value['status'],
        'detail': value['detail'],
        'jwt': JWTToJSON(value['jwt']),
        'temp_otp_token': value['tempOtpToken'],
    };
}
