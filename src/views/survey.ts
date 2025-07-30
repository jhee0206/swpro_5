// store/survey.ts
import { defineStore } from 'pinia'

export const useSurveyStore = defineStore('survey', {
    state: () => ({
        q1: [] as { label: string; score: number | null }[],
        q2to7: {} as Record<string, number[]>, // { '담배제품': [Q2, Q3, Q4, Q5, Q6, Q7], ... }
    }),
    actions: {
        setQ1(items: { label: string; score: number | null }[]) {
            this.q1 = items
        },
        setQnScore(label: string, qIdx: number, value: number) {
            if (!this.q2to7[label]) this.q2to7[label] = [null, null, null, null, null, null]
            this.q2to7[label][qIdx] = value
        }
    }
})