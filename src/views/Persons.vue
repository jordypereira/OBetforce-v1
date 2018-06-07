<template>
  <div id="persons">
    <v-container>
      <v-layout v-for="(group, i) in groups" :key="i">
        <v-flex xs12>
          <group-overview :group="group"></group-overview>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import personImage from '@/assets/images/friends_pics.jpg'
import GroupOverview from '@/components/GroupOverview'

export default {
  components: {
    GroupOverview
  },

  data() {
    return {
      groups: [
        {
          name: "Editor's Choice",
          persons: [
            {
              image: personImage,
              name: 'Friends Name',
              text:
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,'
            },
            {
              image: personImage,
              name: 'Friends Name',
              text:
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,'
            },
            {
              image: personImage,
              name: 'Friends Name',
              text:
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,'
            },
            {
              image: personImage,
              name: 'Friends Name',
              text:
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,'
            }
          ]
        },
        {
          name: 'Top Investors',
          persons: [
            {
              image: personImage,
              name: 'Friends Name',
              text:
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,'
            },
            {
              image: personImage,
              name: 'Friends Name',
              text:
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,'
            },
            {
              image: personImage,
              name: 'Friends Name',
              text:
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,'
            },
            {
              image: personImage,
              name: 'Friends Name',
              text:
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,'
            }
          ]
        },
        {
          name: 'Trending',
          persons: [
            {
              image: personImage,
              name: 'Friends Name',
              text:
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,'
            },
            {
              image: personImage,
              name: 'Friends Name',
              text:
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,'
            },
            {
              image: personImage,
              name: 'Friends Name',
              text:
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,'
            },
            {
              image: personImage,
              name: 'Friends Name',
              text:
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,'
            }
          ]
        }
      ]
    }
  }
}
</script>
