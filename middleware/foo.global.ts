import {defineNuxtRouteMiddleware} from "#app"
import {storeToRefs} from "pinia"
import {useFooBarStore} from "~/stores/FooBarStore";

export default defineNuxtRouteMiddleware(async (to) => {
    if (to.path === "/") {
        const fooBarStore = useFooBarStore()
        const {code} = storeToRefs(fooBarStore)

        code.value = "bar"

        return navigateTo({path: "bar", query: {code: code.value}})
    }
})
