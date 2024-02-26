<template>
  <div>
    <h4>Problems List</h4>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Problem title</th>
          <th>solved</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(problem, index) in $pages.geeksForGeeksProblems"
          :key="index"
          @click.prevent="goToProblem(index)"
        >
          <td>{{ problem.problemTitle }}</td>
          <td>{{ problem.solved ? "yes" : "no" }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { inject } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const $pages = inject("$pages");

function goToProblem(index) {
  router.push({ path: `problems/${index}/view` });
}
</script>

<style scope>
.table.table-hover tr:hover {
  cursor: pointer;
}
</style>
