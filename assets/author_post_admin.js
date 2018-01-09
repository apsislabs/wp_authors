(function($) {
    /*
     * Select/Upload image(s) event
     */

    // $('#post').validate();

    var imageUploader = wp.media({
        title: 'Insert image',
        library : {
            uploadedTo : wp.media.view.settings.post.id,
            type : 'image'
        },
        button: {
            text: 'Use this image' // button label text
        },
        multiple: false
    });

    $('body').on('click', '.upload_image', function(event){
        event.preventDefault();
        imageUploader.on('select', handleImageSelect).open();
    });

    function handleImageSelect()
    {
        var attachment = imageUploader.state().get('selection').first().toJSON();

        if ( attachment ) {
            $('#avatar_preview').empty().append($('<img>', {src: attachment.sizes.medium.url}));
            $('#avatar').val(attachment.url);
            $('#avatar_id').val(attachment.id);
        }
    }

    // /*
    //  * Remove image event
    //  */
    // $('body').on('click', '.misha_remove_image_button', function(){
    //     $(this).hide().prev().val('').prev().addClass('button').html('Upload image');
    //     return false;
    // });
})(jQuery);
