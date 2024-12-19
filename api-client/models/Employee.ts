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
import type { DepartmentEnum } from './DepartmentEnum';
import {
    DepartmentEnumFromJSON,
    DepartmentEnumFromJSONTyped,
    DepartmentEnumToJSON,
    DepartmentEnumToJSONTyped,
} from './DepartmentEnum';

/**
 * 
 * @export
 * @interface Employee
 */
export interface Employee {
    /**
     * 
     * @type {number}
     * @memberof Employee
     */
    readonly id: number;
    /**
     * 
     * @type {number}
     * @memberof Employee
     */
    readonly user: number;
    /**
     * Your employee's name.
     * @type {string}
     * @memberof Employee
     */
    name: string;
    /**
     * 
     * @type {DepartmentEnum}
     * @memberof Employee
     */
    department: DepartmentEnum;
    /**
     * Your employee's annual salary.
     * @type {number}
     * @memberof Employee
     */
    salary: number;
    /**
     * 
     * @type {Date}
     * @memberof Employee
     */
    readonly createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof Employee
     */
    readonly updatedAt: Date;
}



/**
 * Check if a given object implements the Employee interface.
 */
export function instanceOfEmployee(value: object): value is Employee {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('user' in value) || value['user'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('department' in value) || value['department'] === undefined) return false;
    if (!('salary' in value) || value['salary'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    return true;
}

export function EmployeeFromJSON(json: any): Employee {
    return EmployeeFromJSONTyped(json, false);
}

export function EmployeeFromJSONTyped(json: any, ignoreDiscriminator: boolean): Employee {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'user': json['user'],
        'name': json['name'],
        'department': DepartmentEnumFromJSON(json['department']),
        'salary': json['salary'],
        'createdAt': (new Date(json['created_at'])),
        'updatedAt': (new Date(json['updated_at'])),
    };
}

  export function EmployeeToJSON(json: any): Employee {
      return EmployeeToJSONTyped(json, false);
  }

  export function EmployeeToJSONTyped(value?: Omit<Employee, 'id'|'user'|'created_at'|'updated_at'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'department': DepartmentEnumToJSON(value['department']),
        'salary': value['salary'],
    };
}

