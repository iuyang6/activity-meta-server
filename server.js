import express from 'express'
import axios from 'axios'

const app = express()
const PORT = process.env.PORT || 3000

// 分享中转页
app.get('/activity/:id', async (req, res) => {
  const id = req.params.id

  try {
    // 🚨 换成你真实的接口地址
    // const apiRes = await axios.get(`https://api.yourdomain.com/activity/${id}`)
    // const data = apiRes.data
    const data = {
        title: '活动标题',
        description: '活动描述',
        image: 'https://example.com/image.jpg'
    }

    const html = `
      <!DOCTYPE html>
      <html lang="zh-CN">
        <head>
          <meta charset="UTF-8" />
          <title>${data.title}</title>
          <meta property="og:title" content="${data.title}" />
          <meta property="og:description" content="${data.description}" />
          <meta property="og:image" content="${data.image}" />
          

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="${data.title}" />
          <meta name="twitter:description" content="${data.description}" />
          <meta name="twitter:image" content="${data.image}" />

          
        </head>
        <body>
            <div>分享页，即将跳转...</div>
            <script>
                window.location.href = "https://hk-paas.transsion.com/booking/#/policy?bookingActivityId=TEM2507080007";
            </script>
        </body>
      </html>
    `
    res.set('Content-Type', 'text/html')
    res.send(html)
  } catch (err) {
    res.status(404).send('活动不存在或接口请求失败')
  }
})

app.listen(PORT, () => {
  console.log(`✅ 分享服务运行在 http://localhost:${PORT}`)
})
