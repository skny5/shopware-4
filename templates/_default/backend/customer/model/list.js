/**
 * Shopware 4.0
 * Copyright © 2012 shopware AG
 *
 * According to our dual licensing model, this program can be used either
 * under the terms of the GNU Affero General Public License, version 3,
 * or under a proprietary license.
 *
 * The texts of the GNU Affero General Public License with an additional
 * permission and of our proprietary license can be found at and
 * in the LICENSE file you have received along with this program.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * "Shopware" is a registered trademark of shopware AG.
 * The licensing of the program under the AGPLv3 does not imply a
 * trademark license. Therefore any rights, title and interest in
 * our trademarks remain entirely with us.
 *
 * @category   Shopware
 * @package    Customer
 * @subpackage Model
 * @copyright  Copyright (c) 2012, shopware AG (http://www.shopware.de)
 * @version    $Id$
 * @author shopware AG
 */

/**
 * Shopware Model - Customer list backend module.
 *
 * The list model represents a single row for the customer list grid.
 * The model data are concat by the different customer associations.
 */
//{block name="backend/customer/model/list"}
Ext.define('Shopware.apps.Customer.model.List', {

    /**
     * Extends the standard Ext Model
     * @string
     */
    extend:'Ext.data.Model',

    /**
     * Unique identifier field
     * @string
     */
    idProperty:'id',

    /**
     * The fields used for this model
     * @array
     */
    fields:[
		//{block name="backend/customer/model/list/fields"}{/block}
        { name:'id', type:'int' },
        { name:'number', type:'string' },
        { name:'firstName', type:'string' },
        { name:'lastName', type:'string' },
        { name:'firstLogin', type:'date' },
        { name:'customerGroup', type:'string' },
        { name:'company', type:'string' },
        { name:'zipCode', type:'string' },
        { name:'city', type:'string' },
        { name:'orderCount', type:'int' },
        { name:'amount', type:'float' }
    ],

    /**
     * Configure the data communication
     * @object
     */
    proxy:{
        /**
         * Set proxy type to ajax
         * @string
         */
        type:'ajax',

        /**
         * Configure the url mapping for the different
         * store operations based on
         * @object
         */

        api:{
            read:'{url action="getList"}',
            destroy:'{url action="delete" targetField=customers}'
        },

        /**
         * Configure the data reader
         * @object
         */
        reader:{
            type:'json',
            root:'data',
            totalProperty:'total'
        }
    }
});
//{/block}
