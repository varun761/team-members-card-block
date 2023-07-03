/**
 * WordPress components that create the necessary UI elements for the block
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-components/
 */
import { TextControl, PanelBody, FormFileUpload } from '@wordpress/components';

import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls  } from '@wordpress/block-editor';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object}   props               Properties passed to the function.
 * @param {Object}   props.attributes    Available block attributes.
 * @param {Function} props.setAttributes Function that updates individual attributes.
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps();
	return (
		<div { ...blockProps }>
			<InspectorControls>
				<PanelBody title='Block Settings'>
					<fieldset>
						<legend className="blocks-base-control__label">
							{__("Image Url", "team-members")}
						</legend>
						<TextControl
							value={ attributes.image }
							onChange={ ( val ) => setAttributes( { image: val } ) }
						/>
					</fieldset>
					
					<fieldset>
						<legend className="blocks-base-control__label">
						{__("Name", "team-members")}
						</legend>
						<TextControl
							value={ attributes.name }
							onChange={ ( val ) => setAttributes( { name: val } ) }
						/>
					</fieldset>

					<fieldset>
						<legend className="blocks-base-control__label">
						{__("Designation", "team-members")}
						</legend>
						<TextControl
							value={ attributes.designation }
							onChange={ ( val ) => setAttributes( { designation: val } ) }
						/>
					</fieldset>

					<fieldset>
						<legend className="blocks-base-control__label">
						{__("Experience", "team-members")}
						</legend>
						<TextControl
							value={ attributes.year_of_experience }
							onChange={ ( val ) => setAttributes( { year_of_experience: val } ) }
						/>
					</fieldset>
				</PanelBody>
			</InspectorControls>
			<div className="team-member-details">
				{attributes?.image && attributes.image.trim().length > 0 ? (
					<div className="team-image">
						<img src={attributes.image} className='img-fluid'/>
					</div>
				) : (<div className="image-placeholder"></div>)  }
				<div className="name">{ attributes.name }</div>
				<div className="designation">{ attributes.designation }</div>
				{attributes?.year_of_experience && attributes.year_of_experience.trim().length > 0 && (
					<div className="year_of_experience">{ attributes.year_of_experience }</div>
				)}
			</div>
		</div>
	);
}
