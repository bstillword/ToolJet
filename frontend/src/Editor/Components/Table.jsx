import React from 'react';
import { resolve, findProps } from '@/_helpers/utils';

export const Table = function Table({ id, component, onComponentClick, currentState }) {
    
    const backgroundColor = component.definition.styles.backgroundColor.value;
    const color = component.definition.styles.textColor.value;

    console.log('currentState', currentState);

    let data = []
    if(currentState) {
        data = resolve(component.definition.properties.data.value, currentState);
        console.log('resolved param', data);
    }

    const computedStyles = { 
        backgroundColor,
        color
    }

    return (
        <div class="table-responsive table-bordered" style={{...computedStyles, width: '700px'}} onClick={() => onComponentClick(id, component) }>
            <table
                    class="table table-vcenter table-nowrap">
                <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                </tr>
                </thead>
                <tbody>

                {data.map((row => <tr>
                    <td>
                        {row.id}
                    </td>
                    <td>
                        {row.name}
                    </td>
                    <td class="text-muted" >
                        {row.domain}
                    </td>
                </tr>))}
                </tbody>
                {/* <div className="table-footer p-2">
                    Records 1-10 of 242
                </div> */}
            </table>
        </div>
    );
};
