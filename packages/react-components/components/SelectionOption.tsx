import Touchable from '@celo/react-components/components/Touchable'
import RadioButton from '@celo/react-components/icons/RadioButton'
import colors from '@celo/react-components/styles/colors'
import fontStyles from '@celo/react-components/styles/fonts'
import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
  text: string
  isSelected: boolean
  onSelect: (word: string, data: any) => void
  hideCheckboxes?: boolean
  data?: any
  testID?: string
}

export default function SelectionOption({
  text,
  isSelected,
  data,
  onSelect,
  testID,
  hideCheckboxes,
}: Props) {
  function onPress() {
    onSelect(text, data)
  }

  return (
    <Touchable onPress={onPress} testID={testID}>
      <View style={styles.contentContainer}>
        {!hideCheckboxes && (
          <View style={styles.iconContainer}>
            <RadioButton selected={isSelected} />
          </View>
        )}
        <Text style={styles.text} numberOfLines={1}>
          {text}
        </Text>
      </View>
    </Touchable>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: colors.gray2,
  },
  text: {
    ...fontStyles.regular,
    flex: 1,
    marginRight: 16,
  },
  iconContainer: {
    marginRight: 16,
  },
})
