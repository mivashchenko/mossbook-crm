import { addMinutes, isBefore } from 'date-fns'

export const nameToInitials = (name?: string) => {
  if (!name) return ''
  const hasWhiteSpace = name.indexOf(' ') >= 0

  if (!hasWhiteSpace) {
    return ''
  }

  const fullName = name?.split(' ')
  const initials =
    fullName[0].charAt(0) + fullName[fullName.length - 1].charAt(0)
  return initials.toUpperCase()
}

export const namePlateColors: {
  [key: string]: string
} = {
  A: '#8e562e',
  B: '#8764b8',
  C: '#004e8c',
  D: '#D13438',
  E: '#4f6bed',
  F: '#005b70',
  G: '#af199e',
  H: '#99b382',
  I: '#4b4f95',
  J: '#c2ebd6',
  K: '#e0577e',
  L: '#becc37',
  M: '#8392f4',
  N: '#bda04b',
  O: '#fd7b37',
  P: '#236164',
  Q: '#c8886d',
  R: '#efb5b7',
  S: '#7cd5db',
  T: '#d7b0e7',
  U: '#1274b0',
  V: '#f1aa57',
  W: '#db9db2',
  X: '#6e323e',
  Y: '#7ca82a',
  Z: '#9fbcab',
}

export const generateTimeSlots = (
  startDate: Date,
  endDate: Date,
  interval: number
) => {
  let slots = []
  let current = startDate

  while (isBefore(current, endDate)) {
    slots.push(new Date(current))
    current = addMinutes(current, interval)
  }

  return slots
}
