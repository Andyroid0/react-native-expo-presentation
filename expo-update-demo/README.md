- npx expo install expo-updates
- eas update:configure
- eas build:configure

## For production
- eas build --profile production
- eas update // it may prompt you to create a branch stick with main then run eas channel:edit and point production channel to main
- eas submit
