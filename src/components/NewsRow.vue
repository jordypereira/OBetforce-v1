<template>
  <router-link to="/newsfeed">
    <table width="100%" border="0" cellspacing="0" cellpadding="0" class="news_panel_bg">
      <tr>
        <td align="left" valign="top">
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td width="25%" align="left" valign="top" bgcolor="#000000" style="padding-left:10px; padding-top:10px; padding-bottom:10px;"><img :src="news.cdn_image" width="90%" /></td>
              <td width="75%" align="left" valign="top" bgcolor="#000000" style="padding-right:10px; padding-top:10px; padding-bottom:10px;">
                <div>
                  <font style="font-size:12px">
                    {{ news.title }}<br>
                    <font style="font-weight:bold; color:#80e50d">
                      {{ news.publish_date }}
                    </font>
                  </font>
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </router-link>
</template>

<script>
export default {
  props: {
    news: [Array, Object]
  }
}
</script>

<style scoped>
.match {
  width: 100%;
  max-width: 1000px;
  margin: 10px 0;
}
.match-league {
  font-size: 1.1rem;
}
.match-league span {
  font-size: 0.7rem;
  color: #555;
}
.match-scoreboard {
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  width: 100%;
}
.match-scoreboard > * {
  text-align: center;
  padding: 10px;
  align-self: center;
}
.match-score {
  flex: 1 1 20%;
  font-size: 0.9rem;
  height: inherit;
  display: flex;
  flex-flow: column;
  align-content: center;
}
.match-time {
  font-size: 0.8rem;
}
.match-team {
  flex: 1 1 40%;
}
</style>
