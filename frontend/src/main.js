import 'modern-normalize/modern-normalize.css'
import 'primeicons/primeicons.css'
import '@/assets/styles/main.scss'
import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import Textarea from 'primevue/textarea'
import InputGroup from 'primevue/inputgroup'
import InputGroupAddon from 'primevue/inputgroupaddon'
import InputText from 'primevue/inputtext'
import Listbox from 'primevue/listbox'
import Select from 'primevue/select'
import ToggleSwitch from 'primevue/toggleswitch'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup'
import Row from 'primevue/row'
import ConfirmDialog from 'primevue/confirmdialog'
import Dialog from 'primevue/dialog'
import DynamicDialog from 'primevue/dynamicdialog'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import Badge from 'primevue/badge'
import OverlayBadge from 'primevue/overlaybadge'
import Fluid from 'primevue/fluid'
import Inplace from 'primevue/inplace'
import Toolbar from 'primevue/toolbar'
import Skeleton from 'primevue/skeleton'
import Tag from 'primevue/tag'
import Menu from 'primevue/menu'

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
  ripple: true,
})
app.use(ToastService)

app.component('PVButton', Button)
app.component('PVDatePicker', DatePicker)
app.component('PVTextarea', Textarea)
app.component('PVInputGroup', InputGroup)
app.component('PVInputGroupAddon', InputGroupAddon)
app.component('PVInputText', InputText)
app.component('PVListbox', Listbox)
app.component('PVSelect', Select)
app.component('PVToggleSwitch', ToggleSwitch)
app.component('PVDataTable', DataTable)
app.component('PVColumn', Column)
app.component('PVColumnGroup', ColumnGroup)
app.component('PVRow', Row)
app.component('PVConfirmDialog', ConfirmDialog)
app.component('PVDialog', Dialog)
app.component('PVDynamicDialog', DynamicDialog)
app.component('PVToast', Toast)
app.component('PVBadge', Badge)
app.component('PVOverlayBadge', OverlayBadge)
app.component('PVFluid', Fluid)
app.component('PVInplace', Inplace)
app.component('PVToolbar', Toolbar)
app.component('PVSkeleton', Skeleton)
app.component('PVTag', Tag)
app.component('PVMenu', Menu)

app.mount('#app')
