import { isR } from "../../components/ToDos";

if(isR) {
    document.body.style.background = 'rgb(71, 70, 70)'
    document.body.style.filter = 'opacity(0.2)'
} else {
    document.body.style.background = 'rgb(203, 159, 123)'
    document.body.style.filter = 'opacity(1)'
}
