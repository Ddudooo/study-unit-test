package study.unit_test.example1_1

import org.junit.jupiter.api.Assertions.assertFalse
import org.junit.jupiter.api.Assertions.assertTrue
import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.params.ParameterizedTest
import org.junit.jupiter.params.provider.ValueSource

internal class IsStringLongKtTest {

    @DisplayName("짧은 문자열 테스트")
    @ParameterizedTest(name = "[{index}] => {0}")
    @ValueSource(strings = ["shrt", "word", "some", "exp"])
    fun shortStringTest(input: String) {
        val actual = isStringLong(input)

        assertFalse(actual, "짧은 문자열일 경우, false가 반환되어야 한다")
    }

    @DisplayName("긴 문자열 테스트")
    @ParameterizedTest(name = "[{index}] => {0}")
    @ValueSource(strings = ["long string", "junit5", "some string", "example"])
    fun longStringTest(input: String) {
        val actual = isStringLong(input)

        assertTrue(actual, "긴 문자열일 경우, true가 반환되어야 한다")
    }
}
