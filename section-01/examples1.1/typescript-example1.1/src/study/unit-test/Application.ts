import { isStringLong } from '@/study/unit-test/IsStringLong'

async function Application(args: Array<String>) {
  for (let input of args) {
    const result = isStringLong(input)

    console.log(`${input} is long? - ${result}`)
  }
}

;(async () => {
  await Application([])
})()
