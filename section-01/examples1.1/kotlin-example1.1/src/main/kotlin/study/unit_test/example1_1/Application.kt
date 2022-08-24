package study.unit_test.example1_1

fun main(args: Array<String>) {
    for (input in args) {
        val longCheck = isStringLong(input)

        println("$input is long ? $longCheck")
    }
}
