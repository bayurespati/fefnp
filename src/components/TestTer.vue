<!-- <template>
    <v-card
      color="blue-grey darken-1"
      dark
    >
      <v-img
        height="200"
        src="https://cdn.vuetifyjs.com/images/cards/dark-beach.jpg"
      >
        <v-layout wrap>
          <v-flex xs12>
            <v-progress-linear
              :active="isUpdating"
              class="ma-0"
              color="green lighten-3"
              height="4"
              indeterminate
            ></v-progress-linear>
          </v-flex>
          <v-flex
            text-xs-right
            xs12
          >
            <v-menu
              bottom
              left
              transition="slide-y-transition"
            >
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  v-on="on"
                >
                  <v-icon>more_vert</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-tile @click="isUpdating = true">
                  <v-list-tile-action>
                    <v-icon>mdi-settings</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Update</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-menu>
          </v-flex>
          <v-layout
            align-start
            column
            justify-end
            pa-3
          >
            <h3 class="headline">{{ name }}</h3>
            <span class="grey--text text--lighten-1">{{ title }}</span>
          </v-layout>
        </v-layout>
      </v-img>
      <v-form>
        <v-container>
          <v-layout wrap>
            <v-flex xs12 md6>
              <v-text-field
                v-model="name"
                :disabled="isUpdating"
                box
                color="blue-grey lighten-2"
                label="Name"
              ></v-text-field>
            </v-flex>
            <v-flex xs12 md6>
              <v-text-field
                v-model="title"
                :disabled="isUpdating"
                box
                color="blue-grey lighten-2"
                label="Title"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-autocomplete
                v-model="friends"
                :disabled="isUpdating"
                :items="people"
                box
                chips
                color="blue-grey lighten-2"
                label="Select"
                item-text="name"
                item-value="name"
                multiple
              >
                <template v-slot:selection="data">
                  <v-chip
                    :selected="data.selected"
                    close
                    class="chip--select-multi"
                    @input="remove(data.item)"
                  >
                    <v-avatar>
                      <img :src="data.item.avatar">
                    </v-avatar>
                    {{ data.item.name }}
                  </v-chip>
                </template>
                <template v-slot:item="data">
                  <template v-if="typeof data.item !== 'object'">
                    <v-list-tile-content v-text="data.item"></v-list-tile-content>
                  </template>
                  <template v-else>
                    <v-list-tile-avatar>
                      <img :src="data.item.avatar">
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                      <v-list-tile-title v-html="data.item.name"></v-list-tile-title>
                      <v-list-tile-sub-title v-html="data.item.group"></v-list-tile-sub-title>
                    </v-list-tile-content>
                  </template>
                </template>
              </v-autocomplete>
            </v-flex>
          </v-layout>
        </v-container>
      </v-form>
      <v-divider></v-divider>
      <v-card-actions>
        <v-switch
          v-model="autoUpdate"
          :disabled="isUpdating"
          class="mt-0"
          color="green lighten-2"
          hide-details
          label="Auto Update"
        ></v-switch>
        <v-spacer></v-spacer>
        <v-btn
          :disabled="autoUpdate"
          :loading="isUpdating"
          color="blue-grey darken-3"
          depressed
          @click="isUpdating = true"
        >
          <v-icon left>mdi-update</v-icon>
          Update Now
       
      </v-card-actions>
    </v-card>
  </template> -->