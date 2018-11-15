import Vue from 'vue'
import Router from 'vue-router'
import GenericTable from '@/components/generic/GenericTable'
import MenuDetails from '@/components/menus/MenuDetails'
import Menus from '@/components/menus/Menus'
import Meals from '@/components/meals/Meals'
import MealDetails from '@/components/meals/MealDetails'
import Suppliers from '@/components/suppliers/Suppliers'
import Ingredients from '@/components/ingredients/Ingredients'
import Clients from '@/components/clients/Clients'
import Additions from '@/components/additions/Additions'
import WeddingAdditions from '@/components/additions/WeddingAdditions'
import Bookings from '@/components/bookings/Bookings'
import WeddingReceptions from '@/components/weddingReceptions/WeddingReceptions'
import WeddingReceptionDetails from '@/components/weddingReceptions/WeddingReceptionDetails'
import ChoiceToSummary from '@/components/summary/ChoiceToSummary'
import SummaryWeddingReception from '@/components/summary/SummaryWeddingReception'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Menus
    },
    {
      path: '/menus',
      name: 'Menus',
      component: Menus
    },
    {
      path: '/meals',
      name: 'Meals',
      component: Meals
    },
    {
      path: '/meals/:id/details',
      name: 'MealDetails',
      component: MealDetails,
      props: true
    },
    {
      path: '/table',
      name: 'GenericTable',
      component: GenericTable
    },
    {
      path: '/menus/:id/details',
      name: 'MenuDetails',
      component: MenuDetails,
      props: true
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
    },
    {
      path: '/clients',
      name: 'Clients',
      component: Clients
    },
    {
      path: '/additions',
      name: 'Additions',
      component: Additions
    },
    {
      path: '/bookings',
      name: 'Bookings',
      component: Bookings
    },
    {
      path: '/weddingReceptions',
      name: 'WeddingReceptions',
      component: WeddingReceptions
    },
    {
      path: '/weddingReceptions/:id/details',
      name: 'WeddingReceptionDetails',
      component: WeddingReceptionDetails,
      props: true
    },
    {
      path: '/weddingAdditions',
      name: 'WeddingAdditions',
      component: WeddingAdditions
    },
    {
      path: '/summary',
      name: 'ChoiceToSummary',
      component: ChoiceToSummary
    },
    {
      path: '/summary/:id',
      name: 'SummaryWeddingReception',
      component: SummaryWeddingReception,
      props: true
    }
  ],
  mode: 'history'
})
