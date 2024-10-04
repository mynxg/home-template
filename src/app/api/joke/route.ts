import { NextResponse } from 'next/server'

const jokes = [
  "你好，欢迎来到我的网站！如果你在这里看到了什么有趣的东西，那一定是故意的。😉",
  "警告：继续查看控制台可能会导致严重的幽默感过载。请谨慎操作！",
  "恭喜你发现了隐藏的控制台消息！可惜这里没有彩蛋，只有我的幽默感。",
  "如果你能看到这条消息，说明你很可能是个开发者。我们应该一起喝杯咖啡！☕",
  "你知道吗？每次你打开控制台，一个小精灵就会偷偷地笑一下。",
]

export async function GET() {
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)]
  return NextResponse.json({ joke: randomJoke })
}