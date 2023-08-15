import {
  makeStyles,
  Button,
  Popover,
  PopoverTrigger,
  PopoverSurface,
  Label,
  Slider,
  SliderProps,
  shorthands,
  Dropdown,
  Option
} from '@fluentui/react-components'
import {
  TextFontSize20Filled,
  AutoFitHeight20Filled,
  PaddingRight20Filled,
  TextBoxSettings24Regular,
  TextBulletListSquare24Regular
} from '@fluentui/react-icons'
import * as React from 'react'

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyItems: 'stratch',
    alignItems: 'center'
  },
  popoverText: {
    position: 'fixed',
    bottom: '5px',
    left: '5px',
    backgroundColor: 'rgba(0,0,0,.7)',
    ...shorthands.borderRadius('5px')
  },
  popoverText2: {
    position: 'fixed',
    bottom: '50px',
    left: '5px',
    backgroundColor: 'rgba(0,0,0,.7)',
    ...shorthands.borderRadius('5px')
  }
})

const ExampleContent = () => {
  const dropdownId = React.useId()
  const styles = useStyles()
  const id = React.useId()
  const [sliderValue, setSliderValue] = React.useState(160)
  const onSliderChange: SliderProps['onChange'] = (_, data) => setSliderValue(data.value)
  const resetSlider = () => setSliderValue(0)

  return (
    <>
      <div>
        <label htmlFor={dropdownId}>Color theme:</label>
        <br />
        <Dropdown id={dropdownId} defaultValue="Dark" defaultSelectedOptions={['dark']}>
          <Option text="Light" value="light">
            <span
              style={{
                ...shorthands.borderRadius('20px'),
                width: '20px',
                height: '20px',
                border: '2px solid #555',
                background: '#aaa'
              }}
            />{' '}
            Light
          </Option>
          <Option text="Dark" value="dark">
            <span
              style={{
                ...shorthands.borderRadius('20px'),
                width: '20px',
                height: '20px',
                border: '2px solid #555',
                background: '#444'
              }}
            />{' '}
            Dark
          </Option>
        </Dropdown>
      </div>
      <div>
        <label htmlFor={dropdownId}>Color theme:</label>
        <br />
        <Dropdown id={dropdownId} defaultValue="Dark" defaultSelectedOptions={['dark']}>
          <Option text="Light" value="light">
            <span
              style={{
                ...shorthands.borderRadius('20px'),
                width: '20px',
                height: '20px',
                border: '2px solid #555',
                background: '#aaa'
              }}
            />{' '}
            Light
          </Option>
          <Option text="Dark" value="dark">
            <span
              style={{
                ...shorthands.borderRadius('20px'),
                width: '20px',
                height: '20px',
                border: '2px solid #555',
                background: '#444'
              }}
            />{' '}
            Dark
          </Option>
        </Dropdown>
      </div>
      <div className={styles.wrapper}>
        <TextFontSize20Filled />

        <Slider
          size="medium"
          defaultValue={20}
          id={id}
          aria-valuetext={`Value is ${sliderValue}`}
          value={sliderValue}
          min={20}
          max={200}
          onChange={onSliderChange}
          style={{ width: '100%' }}
        />
      </div>

      <div className={styles.wrapper}>
        <PaddingRight20Filled small />

        <Slider
          size="medium"
          defaultValue={20}
          aria-valuetext={`Value is ${sliderValue}`}
          value={sliderValue}
          min={20}
          max={200}
          onChange={onSliderChange}
          style={{ width: '100%' }}
        />
      </div>

      <div className={styles.wrapper}>
        <AutoFitHeight20Filled small />

        <Slider
          size="medium"
          defaultValue={20}
          aria-valuetext={`Value is ${sliderValue}`}
          value={sliderValue}
          min={20}
          max={200}
          onChange={onSliderChange}
          style={{ width: '100%' }}
        />
      </div>
    </>
  )
}

export default function App() {
  const styles = useStyles()
  return (
    <>
      <div className={styles.popoverText2}>
        <Popover withArrow>
          <PopoverTrigger disableButtonEnhancement>
            <Button appearance="transparent" icon={<TextBulletListSquare24Regular />}></Button>
          </PopoverTrigger>
          <PopoverSurface>
            <ExampleContent />
          </PopoverSurface>
        </Popover>
      </div>
      <div className={styles.popoverText}>
        <Popover withArrow>
          <PopoverTrigger disableButtonEnhancement>
            <Button appearance="transparent" icon={<TextBoxSettings24Regular />}></Button>
          </PopoverTrigger>
          <PopoverSurface>
            <ExampleContent />
          </PopoverSurface>
        </Popover>
      </div>
      <div
        style={
          {
            // padding: `1em ${paddingScale}vw`,
            // position: 'relative',
            // // fontSize: `calc((100vw - ${
            // //   paddingScale * 2
            // // }vw) / (${charPerRow} / ${fontProportion}))`
            // fontSize: `${fontSizeRx}vw`,
            // lineHeight: lineHeight
          }
        }
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Nullam vehicula ipsum a arcu cursus. At
          tempor commodo ullamcorper a lacus vestibulum sed arcu. Sapien et ligula ullamcorper
          malesuada proin libero nunc consequat. Varius sit amet mattis vulputate enim. Semper
          feugiat nibh sed pulvinar proin. Suspendisse faucibus interdum posuere lorem ipsum.
          Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Vitae nunc sed
          velit dignissim sodales. Feugiat scelerisque varius morbi enim. Quisque sagittis purus
          sit amet.
        </p>
        <p>
          Posuere sollicitudin aliquam ultrices sagittis orci. At tellus at urna condimentum
          mattis pellentesque id. Eu ultrices vitae auctor eu. Semper auctor neque vitae tempus.
          In est ante in nibh mauris cursus mattis molestie. Montes nascetur ridiculus mus
          mauris vitae ultricies leo integer malesuada. Turpis egestas sed tempus urna et
          pharetra pharetra. Viverra tellus in hac habitasse. Venenatis a condimentum vitae
          sapien pellentesque. Lobortis feugiat vivamus at augue eget arcu. Odio ut sem nulla
          pharetra. Velit scelerisque in dictum non. Pretium viverra suspendisse potenti nullam
          ac tortor vitae purus. Non tellus orci ac auctor augue mauris augue neque gravida.
          Porttitor rhoncus dolor purus non enim praesent. Ultrices vitae auctor eu augue ut.
          Augue mauris augue neque gravida in fermentum et sollicitudin. Vitae congue eu
          consequat ac. Volutpat sed cras ornare arcu dui vivamus arcu.
        </p>
        <p>
          Et ligula ullamcorper malesuada proin libero. Nam aliquam sem et tortor. Purus sit
          amet volutpat consequat mauris nunc. Ipsum faucibus vitae aliquet nec ullamcorper.
          Urna duis convallis convallis tellus id interdum. Fermentum odio eu feugiat pretium
          nibh. Est sit amet facilisis magna etiam. Molestie a iaculis at erat pellentesque
          adipiscing commodo. Pellentesque eu tincidunt tortor aliquam. Posuere ac ut consequat
          semper.
        </p>
      </div>
    </>
  )
}
