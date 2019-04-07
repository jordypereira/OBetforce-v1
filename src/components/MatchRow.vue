<template>
  <div class="match">
    <div class="match-league">{{ match.league.data.name }}
      <span>{{ match.time.starting_at.date }} {{ match.time.starting_at.time | shortenDate }}</span>
    </div>
    <div class="match-scoreboard secondary white--text">
      <div class="match-team">
        {{ match.localTeam.data.name }}
      </div>
      <div class="match-score primary">
        <span v-if="match.time.minute" class="match-time">{{ match.time.minute }}:{{ match.time.second || '00' }}</span>
        <span>{{ match.scores.localteam_score }} - {{ match.scores.visitorteam_score }}</span>
      </div>
      <div class="match-team">
        {{ match.visitorTeam.data.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    match: [Array, Object]
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
