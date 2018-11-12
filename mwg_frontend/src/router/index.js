import Vue from 'vue'
import Router from 'vue-router'
import GenericTable from '@/components/generic/GenericTable'
import MenuDetails from '@/components/menus/MenuDetails'
import Menus from '@/components/menus/Menus'
import Meals from '@/components/meals/Meals'
import Suppliers from '@/components/suppliers/Suppliers'
import Ingredients from '@/components/ingredients/Ingredients'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Menus',
      component: Menus
    },
    {
      path: '/meals',
      name: 'Meals',
      component: Meals
    },
    {
      path: '/table',
      name: 'GenericTable',
      component: GenericTable
    },
    {
      path: '/menus/:id',
      name: 'MenuDetails',
      component: MenuDetails
    },
    {
      path: '/suppliers',
      name: 'Suppliers',
      component: Suppliers
    },
    {
      path: '/ingredients',
      name: 'Ingredients',
      component: Ingredients
    }
  ],
  mode: 'history'
})
